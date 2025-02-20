export default {
  name: "CollapsibleSolo",
  props:{

  },
  template: //html
   `
   <ul class="collapsible collapsible--solo">
   <li>
     <div
       class="pulse collapsible-header waves-effect waves-light grow flex--justify-center flex--align-center"
       tabindex="0"
       style="background-image: none"
     >
       <p>
         <b><slot name="title"></slot> ​</b>
       </p>
     </div>

     <div
       class="collapsible-body bg-purple"
       style="
         transition: max-height 300ms ease-out;
         max-height: 0px;
       "
     >
       <div class="py-40">
         <slot name="content"></slot>
       </div>
     </div>
   </li>
 </ul>
  `,
};

