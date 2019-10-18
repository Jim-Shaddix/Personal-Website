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
