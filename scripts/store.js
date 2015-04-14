import Reflux from 'reflux'
import Actions from './actions'

var items = {}
var counter = 0

export default Reflux.createStore({
    listenables: [Actions],

    update: function() {
        this.trigger(items)
    },

    onRemoveItem: function(id) {
        delete items[id]
        this.update()
    },

    onAddItem: function(item) {
        items[new Date().valueOf()] = item
        this.update()
    },

    onIncreaseCounter: function() {
        this.trigger({count: ++counter})
    }
})

