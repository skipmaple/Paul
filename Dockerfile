FROM ruby:3.1-slim-bullseye
LABEL maintainer="Drew Lee <skipmaple@gmail.com>"

ENV RAILS_ENV production
ENV APP_ROOT /usr/src/paul
ENV PAUL_DATABASE_PORT 5432
WORKDIR $APP_ROOT

# =============================================
# System layer

# Will invalidate cache as soon as the Gemfile changes
COPY Gemfile Gemfile.lock $APP_ROOT/

# * Setup system
# * Install Ruby dependencies
RUN set -eux; \
    \
    savedAptMark="$(apt-mark showmanual)"; \
	apt-get update; \
	apt-get install -y --no-install-recommends \
		ca-certificates \
		curl \
		wget \
		\
		bzr \
		git \
		mercurial \
		openssh-client \
		subversion \
        freetds-dev \
        gcc \
        libpq-dev \
        make \
        patch \
		\
# we need "gsfonts" for generating PNGs of Gantt charts
# and "ghostscript" for creating PDF thumbnails (in 4.1+)
		ghostscript \
		gsfonts \
		imagemagick \
# grab gosu for easy step-down from root
		gosu \
# grab tini for signal processing and zombie killing
		tini \
	; \
# allow imagemagick to use ghostscript for PDF -> PNG thumbnail conversion (4.1+)
	sed -ri 's/(rights)="none" (pattern="PDF")/\1="read" \2/' /etc/ImageMagick-6/policy.xml; \
	rm -rf /var/lib/apt/lists/*; \
    apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false

RUN gem update --system \
 && gem install bundler foreman \
 && bundle config --global frozen 1 \
 && bundle config set without 'test' \
 && bundle install --jobs 4 --without "development test"

# ========================================================
# Application layer

# Copy application code
COPY . $APP_ROOT

# Precompile assets for a production environment.
# This is done to include assets in production images on Dockerhub.
RUN RAILS_ENV=production bundle exec rake assets:precompile

VOLUME $APP_ROOT/pg_data

# Startup
CMD ["bin/docker-start"]
