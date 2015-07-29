System.register(['aurelia-framework', 'typeahead'], function (_export) {
    'use strict';

    var inject, customAttribute, bindable, Typeahead;

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            customAttribute = _aureliaFramework.customAttribute;
            bindable = _aureliaFramework.bindable;
        }, function (_typeahead) {}],
        execute: function () {
            Typeahead = (function () {
                var _instanceInitializers = {};

                _createDecoratedClass(Typeahead, [{
                    key: 'minLength',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return 0;
                    },
                    enumerable: true
                }, {
                    key: 'highlight',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return true;
                    },
                    enumerable: true
                }, {
                    key: 'substringMatcher',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return null;
                    },
                    enumerable: true
                }, {
                    key: 'searchEntity',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return null;
                    },
                    enumerable: true
                }, {
                    key: 'selected',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return null;
                    },
                    enumerable: true
                }, {
                    key: 'scope',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return null;
                    },
                    enumerable: true
                }], null, _instanceInitializers);

                function Typeahead(element) {
                    _classCallCheck(this, _Typeahead);

                    _defineDecoratedPropertyDescriptor(this, 'minLength', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'highlight', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'substringMatcher', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'searchEntity', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'selected', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'scope', _instanceInitializers);

                    this.element = element;
                }

                Typeahead.prototype.attached = function attached() {
                    var _this = this;

                    var self = this;

                    $(self.element).typeahead({
                        hint: true,
                        highlight: self.highlight,
                        minLength: self.minLength
                    }, {
                        name: 'entities',
                        source: function source(query, syncCallback, asyncCallback) {
                            var results;
                            return regeneratorRuntime.async(function source$(context$3$0) {
                                while (1) switch (context$3$0.prev = context$3$0.next) {
                                    case 0:
                                        if (!self.substringMatcher) {
                                            context$3$0.next = 5;
                                            break;
                                        }

                                        context$3$0.next = 3;
                                        return regeneratorRuntime.awrap(self.substringMatcher(query, self.searchEntity, self.scope));

                                    case 3:
                                        results = context$3$0.sent;

                                        asyncCallback(results);

                                    case 5:
                                    case 'end':
                                        return context$3$0.stop();
                                }
                            }, null, _this);
                        }
                    }).bind('typeahead:select', function (ev, selected) {
                        if (self.selected) {
                            self.selected(selected, self.searchEntity, self.scope);
                        }
                    });
                };

                var _Typeahead = Typeahead;
                Typeahead = inject(Element)(Typeahead) || Typeahead;
                Typeahead = customAttribute('typeahead')(Typeahead) || Typeahead;
                return Typeahead;
            })();

            _export('Typeahead', Typeahead);
        }
    };
});