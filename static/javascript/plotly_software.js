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
        paper_bgcolor: '#f5f8fa',
        yaxis: {
            tickvals: [5, 4, 3, 2, 1],
            ticktext: ['Strong Skills', 'Skilled', 'Intermediate', 'Experienced', 'Beginner']
        }
    };

    Plotly.newPlot('plotlyDiv', data, layout, {responsive: true});
}

function plotly_analysis() {

    var trace1 = {
        type: 'bar',
        x: ["Numpy", "Matplotlib", "Pandas", "Plotly", "Dash", "Scipy", "scikitlearn", "Excel", "TensorFlow"],
        y: [5, 5, 5, 4, 4, 3, 3, 3, 1],
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
        paper_bgcolor: '#f5f8fa',
        yaxis: {
            tickvals: [5, 4, 3, 2, 1],
            ticktext: ['Strong Skills', 'Skilled', 'Intermediate', 'Experienced', 'Beginner']
        }
    };
    x = document.getElementById('plotlyDiv')
    x.innerhtml = ""
    Plotly.newPlot('plotlyDiv', data, layout, {responsive: true});
}
