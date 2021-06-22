function calculateTotalWeight(data) {
  const totals = [];

  data.forEach((workout) => {
    const workoutTotal = workout.exercises.reduce((total, { type, weight }) => {
      if (type === 'resistance') {
        return total + weight;
      }
      return total;
    }, 0);

    totals.push(workoutTotal);
  });

  return totals;
}

function countResistanceCardio(data) {
  const exerciseType = [0, 0];

  for (const workout of data) {
    for (const { type } of workout.exercises) {
      if (type === 'resistance') exerciseType[0]++;
      else exerciseType[1]++;
    }
  }

  return exerciseType;
}

function populateChart(data) {
  const durations = data.map(({ totalDuration }) => totalDuration);
  const pounds = calculateTotalWeight(data);
  const countExercise = countResistanceCardio(data);

  const line = document.querySelector('#canvas').getContext('2d');
  const bar = document.querySelector('#canvas2').getContext('2d');
  const donut = document.querySelector('#canvas3').getContext('2d');

  const labels = data.map(({ day }) => {
    const date = new Date(day);

    // Use JavaScript's `Intl` object to help format dates
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    }).format(date);
  });

  let lineChart = new Chart(line, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Workout Duration In Minutes',
          backgroundColor: 'red',
          borderColor: 'red',
          data: durations,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Time Spent Working Out (Last 7 days)',
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  let barChart = new Chart(bar, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'Pounds',
          data: pounds,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Weight Lifted (Last 7 days)',
        },
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });

  let donutChart = new Chart(donut, {
    type: 'doughnut',
    data: {
      labels: ['Resistance', 'Cardio'],
      datasets: [
        {
          data: countExercise,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Exercise Percent Resistance vs Cardio',
        },
      },
      radius: '80%',
    },
  });
}

// get all workout data from back-end
API.getWorkoutsInRange().then(populateChart);
