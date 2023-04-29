export default{
    template:`
    <div class="flex gap-2">
                <button 
                v-for="tag in tags" class="border rounded px-1 py-px text-xs"
                @click="$emit('update:currentTag',tag)" 
                :class="{
                  'border-blue-500 text-blue-500':tag===currentTag
                }"
              >
              {{tag}}
              </button>
            </div>
    `,
    //fo2 3ind l @click 3milna update la l model value w hiyye darooure hek 2isma ykun 
    props:{
        initTags:Array,
        currentTag: String //this is where we accepting the currentTag as a prop,daroure ykun hek 2isma 
    },
    
    computed:{
      tags(){
        return ['all',...new Set(this.initTags)]
      }
    }

}