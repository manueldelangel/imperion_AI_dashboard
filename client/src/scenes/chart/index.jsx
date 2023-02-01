import React from 'react';
import { Bar } from 'react-chartjs-2';

let file = [
    {
        "DateTime": "2022-11-03 08:32:00",
        "Regressor Score": {
            "prediction": 1.391540597660927,
            "ignored": "False"
        },
        "Classifier Score": {
            "prediction": "0.0",
            "probaPercentile": 61,
            "probas": {
                "0.0": 0.535683250803558,
                "1.0": 0.464316749196442
            },
            "ignored": "False"
        },
        "DL Classifier Score": {
            "prediction": "0.0",
            "probaPercentile": 57,
            "probas": {
                "0.0": 0.6945316791534424,
                "1.0": 0.30546829104423523
            },
            "ignored": "False"
        }
    },
    {
        "DateTime": "2022-11-03 08:33:00",
        "Regressor Score": {
            "prediction": 1.4101456236345729,
            "ignored": "False"
        },
        "Classifier Score": {
            "prediction": "0.0",
            "probaPercentile": 61,
            "probas": {
                "0.0": 0.5351034098043169,
                "1.0": 0.4648965901956831
            },
            "ignored": "False"
        },
        "DL Classifier Score": {
            "prediction": "0.0",
            "probaPercentile": 57,
            "probas": {
                "0.0": 0.7028477787971497,
                "1.0": 0.29715216159820557
            },
            "ignored": "False"
        }
    },
    {
        "DateTime": "2022-11-03 08:34:00",
        "Regressor Score": {
            "prediction": 1.4495720805080257,
            "ignored": "False"
        },
        "Classifier Score": {
            "prediction": "0.0",
            "probaPercentile": 63,
            "probas": {
                "0.0": 0.5094483000659772,
                "1.0": 0.4905516999340228
            },
            "ignored": "False"
        },
        "DL Classifier Score": {
            "prediction": "1.0",
            "probaPercentile": 70,
            "probas": {
                "0.0": 0.5203794240951538,
                "1.0": 0.47962063550949097
            },
            "ignored": "False"
        }
    },
    {
        "DateTime": "2022-11-03 08:35:00",
        "Regressor Score": {
            "prediction": 1.4178869911143357,
            "ignored": "False"
        },
        "Classifier Score": {
            "prediction": "0.0",
            "probaPercentile": 63,
            "probas": {
                "0.0": 0.5091267444252183,
                "1.0": 0.4908732555747816
            },
            "ignored": "False"
        },
        "DL Classifier Score": {
            "prediction": "0.0",
            "probaPercentile": 61,
            "probas": {
                "0.0": 0.6407385468482971,
                "1.0": 0.3592614233493805
            },
            "ignored": "False"
        }
    },
    {
        "DateTime": "2022-11-03 08:36:00",
        "Regressor Score": {
            "prediction": 1.3624016262290268,
            "ignored": "False"
        },
        "Classifier Score": {
            "prediction": "0.0",
            "probaPercentile": 62,
            "probas": {
                "0.0": 0.5194512808261019,
                "1.0": 0.4805487191738981
            },
            "ignored": "False"
        },
        "DL Classifier Score": {
            "prediction": "0.0",
            "probaPercentile": 56,
            "probas": {
                "0.0": 0.7071006298065186,
                "1.0": 0.29289937019348145
            },
            "ignored": "False"
        }
    },
  ]

const regressorScores = file.map(item => item['Regressor Score'].prediction);


const data = {
  labels: Array.from({length: regressorScores.length}, (_, i) => i),
  datasets: [
    {
      label: 'Regressor Score',
      data: regressorScores,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }
  ]
};

const options = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
};

const BarChart = () => {
  return (
    <Bar
      data={data}
      width={100}
      height={50}
      options={options}
    />
  );
};

export default BarChart;