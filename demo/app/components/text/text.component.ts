import { ChangeDetectorRef, Component, ElementRef, Renderer2 } from '@angular/core';
import { BaseTextComponent } from 'slate-angular';
import { SlateLeaves } from '../../../../packages/src/components/leaves/leaves.component';

export enum MarkTypes {
    bold = 'bold',
    italic = 'italic',
    underline = 'underlined',
    strike = 'strike',
    code = 'code-line'
}

@Component({
    selector: 'span[textMark]',
    template: ``,
    host: {
        'data-slate-node': 'text'
    },
    standalone: true,
    imports: [SlateLeaves]
})
export class DemoTextMarkComponent extends BaseTextComponent {
    attributes = [];

    constructor(public elementRef: ElementRef, public renderer2: Renderer2, cdr: ChangeDetectorRef) {
        super(elementRef, cdr);
    }

    applyTextMark() {
        this.attributes.forEach(attr => {
            this.renderer2.removeAttribute(this.elementRef.nativeElement, attr);
        });
        this.attributes = [];
        for (const key in this.text) {
            if (Object.prototype.hasOwnProperty.call(this.text, key) && key !== 'text' && !!this.text[key]) {
                const attr = `slate-${key}`;
                this.renderer2.setAttribute(this.elementRef.nativeElement, attr, 'true');
                this.attributes.push(attr);
            }
        }
    }

    onContextChange() {
        super.onContextChange();
        this.applyTextMark();
    }
}
