import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
  components: { Assignment, AssignmentTags },

  template: `
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">
            {{ title }}
            <span>({{assignments.length}})</span>
            </h2>
            <AssignmentTags
              v-model:currentTag="currentTag" //his is where the data is being synced on the main side
              //fina nsammiha lli badna ye v-model:name="...", w mnistilima honik 3a hal 2ases
              :initTags="assignments.map(a=>a.tag)"
            />
            <ul 
              class="border border-gray-600 divide-y divide-gray-600 mt-6"
              
              >
               <assignment 
                    v-for="assignment in fiteredAssignments"
                    :key="assignment.id" 
                    :assignment="assignment"
                ></assignment>
            </ul>
        </section> 
    `,

  props: {
    assignments: Array,
    title: String,
  },
  data() {
    return {
      currentTag: "all",
    };
  },
  computed: {
    fiteredAssignments() {
      if (this.currentTag === "all") {
        return this.assignments;
      }

      return this.assignments.filter((a) => a.tag === this.currentTag);
    },
  },
};
