import React, { Component } from 'react';
import { fabric } from 'fabric';
import ReactDOM from 'react-dom';

var fabricCanvas = new fabric.Canvas();

class GraphicEditor extends Component {

    componentDidMount() {
        
        var el = ReactDOM.findDOMNode(this);
        // Here we have the canvas so we can initialize fabric
        fabricCanvas.initialize(el, {
            height: 300,
            width: 300,
        });

        fabricCanvas.add(new fabric.Circle({
            radius: 50,
            originX: 'center',
            originY: 'center',
            fill: '#000',
            top: fabricCanvas.height / 2,
            left: fabricCanvas.width / 2,
        }));

        var text = new fabric.IText("Hello world", {
            top: 20,
            left: 12,
            originX: 'center',
            textAlign: 'center',
            fontSize: 26,
            fontWeight: 'bold',
            fontFamily: 'Tahoma',
            color:'#000'
        });

        fabricCanvas.add(text);
        fabricCanvas.setActiveObject(fabricCanvas.getObjects()[0]);
    }
    render() {
        return (
            <canvas className="graphicEditor"></canvas>
        );
    }

}

export default GraphicEditor;
