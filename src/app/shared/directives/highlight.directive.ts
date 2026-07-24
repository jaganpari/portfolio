import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
selector:'[appHighlight]',
})

export class HighlightDirective {

    @HostBinding('style.backgroundColor') backgroundColor = '';
    @HostBinding('style.color') color = '';
    @HostBinding('style.transform') transform = '';

    @HostListener('mouseenter') onMouseEnter() {
        this.backgroundColor = '#2563eb';
        this.color = 'white';
        this.transform = 'translateY(-4px)';
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.backgroundColor = '#eef4ff';
        this.color = '#2563eb';
        this.transform = 'translateY(0)';
    }

}