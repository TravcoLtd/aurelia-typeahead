import {inject, customAttribute, bindable} from 'aurelia-framework';
import 'typeahead';

@customAttribute('typeahead')
@inject(Element)
export class Typeahead {
    @bindable minLength = 0;
    @bindable highlight = true;
    @bindable substringMatcher = null;
    @bindable searchEntity = null;
    @bindable selected = null;
    @bindable scope = null;

    constructor(element) {
        this.element = element;
    }
    
    attached() {
        var self = this;

        $(self.element).typeahead({
            hint: true,
            highlight: self.highlight,
            minLength: self.minLength
        },
        {
            name: 'entities',
            source: async (query, syncCallback, asyncCallback) =>
            {
                if(self.substringMatcher){
                    var results = await self.substringMatcher(query, self.searchEntity, self.scope);
                    asyncCallback(results);
                }
            }
        })
        .bind('typeahead:select', function(ev, selected) {
            if(self.selected){
                self.selected(selected, self.searchEntity, self.scope);
            }
        });
    }

}