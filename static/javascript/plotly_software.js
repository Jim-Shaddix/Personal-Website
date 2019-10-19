function plotly_software() {

    var trace1 = {
        type: 'bar',
        x: ["Python", "C/C++", "MATLAB", "GIT CLI", "SQL", "Java", "HTML/CSS", "C#", "Javascript"],
        y: [5, 4, 4, 4, 3, 3, 3, 2, 1],
        marker: {
            color: 'blue',
            line: {
                width: 2.5
            }
        }
    };

    var data = [trace1];

    var layout = {
        title: 'Software Skills',
        font: {size: 12},
        yaxis: {
            tickvals: [5, 4, 3, 2, 1],
            ticktext: ['Strong Skills', 'Skilled', 'Some Skill', 'Experienced', 'Beginner']
        }
    };

    Plotly.newPlot('plotlyDiv', data, layout, {responsive: true});
}

function plotly_analysis() {

    var trace1 = {
        type: 'bar',
        x: ["Numpy", "Pandas", "Matplotlib", "Plotly", "Dash", "Scipy", "scikitlearn", "Excel"],
        y: [5, 5, 5, 4, 4, 3, 3, 3],
        marker: {
            color: 'red',
            line: {
                width: 2.5
            }
        }
    };

    var data = [trace1];

    var layout = {
        title: 'Data Analysis Skills',
        font: {size: 12},
        yaxis: {
            tickvals: [5, 4, 3, 2, 1],
            ticktext: ['Strong Skills', 'Skilled', 'Some Skill', 'Experienced', 'Beginner']
        }
    };
    x = document.getElementById('plotlyDiv')
    x.innerhtml = ""
    Plotly.newPlot('plotlyDiv', data, layout, {responsive: true});
}


/* This was supposed to stop plotly from loading after the modal,
 * but it doesn't seem to work
 */
$('#skillModal').on('shown.bs.modal',  function (e) {
  plotly_software();
})

