var Eventer = require('./_eventer.js');
var ItemsHolder = require('./phd.cart.sixpack.holder_items.js');
var ItemsDisplay = require('./phd.cart.sixpack.holder_display.js');

// TODO: update display & submitter

var SixPackHolder = function ($ele) {
  this.$ele = $ele;
  new Eventer(this);
  
  var limit_multiple = this.$ele.data('phd-holding-limit-multiple') || 6;
  var display_element = this.$ele.find('[data-phd-holding-items]');
  
  this.items = new ItemsHolder(limit_multiple);
  this.items_display = new ItemsDisplay(display_element, limit_multiple);
  
  this._add_event_listeners();
};

SixPackHolder.prototype.add_to_holding = function (product) {
  this.items.add_item(product);
  this.items_display.update(this.items.total_count);
  return this.items.item_count(product.id);
};

SixPackHolder.prototype.remove_from_holding = function (product_id) {
  this.items.remove_item(product_id);
  this.items_display.update(this.items.total_count);
  return this.items.item_count(product_id);
};

SixPackHolder.prototype.update_item_in_holding = function (product, qty) {
  this.items.update_item(product, qty);
  this.items_display.update(this.items.total_count);
  return this.items.item_count(product.id);
};

// Private

SixPackHolder.prototype._add_event_listeners = function () {
};

module.exports = SixPackHolder;