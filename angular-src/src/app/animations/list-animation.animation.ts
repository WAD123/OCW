// import the required animation functions from the angular animations module
import { trigger, style, animate, query, transition, stagger } from '@angular/animations';
let duration=0.4;
export const listAnimation =
  // console.log(this);
   // trigger name for attaching this animation to an element using the [@triggerName] syntax
   trigger('listAnimation', [
    transition('* => *', [ // each time the binding value changes
      query(':enter', [
        style({ opacity: 0, transform: "translateX(-20px)" }),
        stagger(200, [
          animate(duration+'s', style({ opacity: 1, transform: "translateX(0px)" }))
        ])
      ], {optional: true}),
      query(':leave', [
        stagger(0, [
          animate((duration/2)+'s', style({ opacity: 0, transform: "translateX(-20px)" }))
        ])
      ], {optional: true}),
    ])
  ]);