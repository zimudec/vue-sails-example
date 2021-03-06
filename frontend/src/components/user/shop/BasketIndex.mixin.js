const BasketIndexMixin = {
  i18n: {
    messages: {
      en: {
        'button.first': 'Remove',
        'span.first': 'Total',
        'button.second': 'Checkout'
      },
      de: {
        'button.first': 'Entfernen',
        'span.first': 'Summe',
        'button.second': 'Kaufen'
      }
    }
  },

  computed: {
    basket: {
      get () {
        return this.$store.state.Basket.basket
      }
    },

    totalPrice: {
      get () {
        let totalPrice = 0
        this.basket.products.forEach((product) => {
          totalPrice += product.price
        })

        return Math.round(totalPrice * 100) / 100
      }
    }
  },

  methods: {
    checkout () {
      this.$store.dispatch('checkout', this.basket)
        .then(() => {
          // Success message
        })
        .catch(() => {
          // Error message
        })
    },

    /**
     * @param index
     */
    removeProduct (index) {
      this.$store.commit('REMOVE_PRODUCT_FROM_BASKET', index)
    }
  }
}

export default BasketIndexMixin
