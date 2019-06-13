<template>
  <div class="container">
    <gantt-elastic :tasks="tasks" :options="options">
      
    </gantt-elastic>
  </div>
</template>

<script>
export default {
  components: {
    GanttElastic: () => import("@/components/calendar/GanttElastic.vue")
  },
  data() {
    return {
      title: "Index",
      tasks:  [
        {
          id: 1,
          label: 'Make some noise',
          user:
            '<a href="https://www.google.com/search?q=John+Doe" target="_blank" style="color:#0077c0;">John Doe</a>',
          start: new Date(),
          duration: 15 * 24 * 60 * 60 * 1000,
          progress: 85,
          type: 'project'
          //collapsed: true,
        },
        {
          id: 2,
          label: 'With great power comes great responsibility',
          user:
            '<a href="https://www.google.com/search?q=Peter+Parker" target="_blank" style="color:#0077c0;">Peter Parker</a>',
          parentId: 1,
          start:new Date(),
          duration: 4 * 24 * 60 * 60 * 1000,
          progress: 50,
          type: 'milestone',
          collapsed: true,
          style: {
            base: {
              fill: '#1EBC61',
              stroke: '#0EAC51'
            }
            /*'tree-row-bar': {
              fill: '#1EBC61',
              stroke: '#0EAC51'
            },
            'tree-row-bar-polygon': {
              stroke: '#0EAC51'
            }*/
          }
        },
        {
          id: 3,
          label: 'Courage is being scared to death, but saddling up anyway.',
          user:
            '<a href="https://www.google.com/search?q=John+Wayne" target="_blank" style="color:#0077c0;">John Wayne</a>',
          parentId: 2,
          start: new Date(),
          duration: 2 * 24 * 60 * 60 * 1000,
          progress: 100,
          type: 'task'
        },
        {
          id: 4,
          label: 'Put that toy AWAY!',
          user:
            '<a href="https://www.google.com/search?q=Clark+Kent" target="_blank" style="color:#0077c0;">Clark Kent</a>',
          start:new Date(),
          duration: 2 * 24 * 60 * 60 * 1000,
          progress: 50,
          type: 'task',
          dependentOn: [3]
        }
      ],

      options : {
        maxRows: 100,
        maxHeight: 300,
        title: {
          label: 'Your project title as html (link or whatever...)',
          html: false
        },
        row: {
          height: 24
        },
        calendar: {
          hour: {
            display: false
          }
        },
        chart: {
          progress: {
            bar: false
          },
          expander: {
            display: true
          }
        },
        taskList: {
          expander: {
            straight: false
          },
          columns: [
            {
              id: 1,
              label: 'ID',
              value: 'id',
              width: 40
            },
            {
              id: 2,
              label: 'Description',
              value: 'label',
              width: 200,
              expander: true,
              html: true,
              events: {
                click({ data, column }) {
                  alert('description clicked!\n' + data.label);
                }
              }
            },
            {
              id: 3,
              label: 'Assigned to',
              value: 'user',
              width: 130,
              html: true
            },
            {
              id: 3,
              label: 'Start',
              value: task => dayjs(task.start).format('YYYY-MM-DD'),
              width: 78
            },
            {
              id: 4,
              label: 'Type',
              value: 'type',
              width: 68
            },
            {
              id: 5,
              label: '%',
              value: 'progress',
              width: 35,
              style: {
                'task-list-header-label': {
                  'text-align': 'center',
                  width: '100%'
                },
                'task-list-item-value-container': {
                  'text-align': 'center',
                  width: '100%'
                }
              }
            }
          ]
        }
        /*locale:{
          name: 'pl', // name String
          weekdays: 'Poniedziałek_Wtorek_Środa_Czwartek_Piątek_Sobota_Niedziela'.split('_'), // weekdays Array
          weekdaysShort: 'Pon_Wto_Śro_Czw_Pią_Sob_Nie'.split('_'), // OPTIONAL, short weekdays Array, use first three letters if not provided
          weekdaysMin: 'Pn_Wt_Śr_Cz_Pt_So_Ni'.split('_'), // OPTIONAL, min weekdays Array, use first two letters if not provided
          months: 'Styczeń_Luty_Marzec_Kwiecień_Maj_Czerwiec_Lipiec_Sierpień_Wrzesień_Październik_Listopad_Grudzień'.split('_'), // months Array
          monthsShort: 'Sty_Lut_Mar_Kwi_Maj_Cze_Lip_Sie_Wrz_Paź_Lis_Gru'.split('_'), // OPTIONAL, short months Array, use first three letters if not provided
          ordinal: n => `${n}`, // ordinal Function (number) => return number + output
          relativeTime: { // relative time format strings, keep %s %d as the same
            future: 'za %s', // e.g. in 2 hours, %s been replaced with 2hours
            past: '%s temu',
            s: 'kilka sekund',
            m: 'minutę',
            mm: '%d minut',
            h: 'godzinę',
            hh: '%d godzin', // e.g. 2 hours, %d been replaced with 2
            d: 'dzień',
            dd: '%d dni',
            M: 'miesiąc',
            MM: '%d miesięcy',
            y: 'rok',
            yy: '%d lat'
          }
       }*/
      }
    };
  }
};
</script>