//markers styling from https://github.com/Concept211/Google-Maps-Markers
export const severityStyle = (severity) =>{
    if(severity === "Normal"){
        return {
            status: 'success',
            markerLink : 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_green.png'
        }
    }
    else if(severity === "High"){
        return {
            status: 'warning',
            markerLink : 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_yellow.png'
        }
    }
    else if(severity === 'Dangerous'){
        return {
            status: 'error',
            markerLink : 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red.png'
        }
    }
    else{
        return {
            status: 'processing',
            markerLink : 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_blue.png'
        }
    }
}