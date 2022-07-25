# frozen_string_literal: true

module Paul
  module Utils
    extend self

    # A safe alternative to String#downcase!
    #
    # This will make copies of frozen strings but downcase unfrozen
    # strings in place, reducing allocations.
    def safe_downcase!(str)
      if str.frozen?
        str.downcase
      else
        str.downcase! || str
      end
    end
  end
end
