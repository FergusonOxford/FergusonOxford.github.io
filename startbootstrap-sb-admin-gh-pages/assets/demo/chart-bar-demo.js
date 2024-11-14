// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Cute", "Hernan", "Rude", "Love", "Bucket", "Ragdoll"],
    datasets: [{
      label: "Number of Cats per Tag",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 5312, 6251, 7841, 9821, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
const cuteTag = "cute"
const hernanTag = "Hernan"
const rudeTag = "Rude"
const loveTag = "Love" 
const bucketTag = "Bucket"
const ragdollTag = "Ragdoll"


async function CatTagAmount(catTag) {
  try {
    const response = await fetch("https://cataas.com/api/cats?tags=" + catTag);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    
    
    const text =  await response.json(); 
    console.log(text)
    
 
    // Await the blob response
   // const imgURL = URL.createObjectURL(blob);
    const catDiv = document.getElementById("");
    catDiv.innerHTML = text
  } catch (error) {
    console.error("Async/Await fetch error:", error);
  }
}
CatTagAmount(cuteTag)
CatTagAmount(hernanTag)
CatTagAmount(rudeTag)
CatTagAmount(loveTag)
CatTagAmount(bucketTag)
CatTagAmount(ragdollTag)