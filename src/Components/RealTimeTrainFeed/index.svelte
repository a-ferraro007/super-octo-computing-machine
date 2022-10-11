<script>
  import { onMount, onDestroy } from "svelte"
  let upcomingTrains
  let combinedAndSorted = []
  let conn

  onMount(() => {
    try {
      conn = new WebSocket(`wss://mta.tony.place/ws?stopID=L13&subwayLine=L`)
      conn.onmessage = function (evt) {
        var messages = evt.data.split('\n')
        let data = JSON.parse(messages)
        console.log(data);
        upcomingTrains = data.parsedTrains
        combinedAndSorted = [...upcomingTrains.northbound, ...upcomingTrains.southbound].sort(
          (a, b) => a.train.timeInMinutes - b.train.timeInMinutes
        )
      }
    } catch (error) {
      console.error(error)
    }
  })

  onDestroy(() => {
    if(!conn) return
    console.log("CLOSE: ", conn );
		conn?.close()
	})

</script>



  {#if combinedAndSorted.length > 0}
    <ul class="overflow-scroll ">
      {#each combinedAndSorted as upcomingTrain}
      <li class="bg-white first:my-0 my-2 rounded-sm">
        <div class="h-full w-full py-2">
          <div class="flex flex-row gap-3 w-full">
            <svg class="w-[26px] h-[26px] pl-1" width="100%" height="100%" viewBox="0 0 90 90" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
              <g id="L">
                  <circle cx="45" cy="45" r="45" style="fill:rgb(167,169,172);"/>
                  <path d="M29.7168,21.0091L39.7428,21.0091L39.7428,60.3646L63.5059,60.3646L63.5059,68.9909L29.7168,68.9909L29.7168,21.0091Z" style="fill:white;fill-rule:nonzero;"/>
              </g>
          </svg>
            <span class=" text-xs self-center w-1/2 font-semibold">
              {upcomingTrain.direction}
            </span>
            <span class="flex justify-end flex-grow text-xs self-center pr-3 font-semibold">
              {upcomingTrain.train.timeInMinutes + 'min'}</span
            >
          </div>
        </div>
      </li>
      {/each}
    </ul>
  <!--{:else}
  <div class="flex flex-col flex-grow justify-around ">
    {#each {length: 4} as _ }
    <div class=" bg-slate-300 rounded-sm h-11 animate-pulse">
      </div>
    {/each}
  </div>-->
  {/if}



