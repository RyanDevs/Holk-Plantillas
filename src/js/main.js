var HolkPlantillas = React.createClass({

    render: function () {
        return (
            <div className="header">

                <center>
                    <h1 className="title-holk-plantillas">HOLK PLANTILLAS</h1>

                <br/>
                    <h2 className="subtitle-holk-plantillas">Holk x Slave Team HH</h2>

                </center>
            </div>
        );
    }

});

var Plantilla = React.createClass({
    render: function(){



        return(

        <div className="Plantilla-Div">

            <h1 className="title-plantilla">{this.props.title}</h1>
            <img src={"../styles/img/icon.jpeg"}/> <br/>
            <center>
            <button className="download-button">Descargar</button>
            </center>
        </div>


     );
    }
});


ReactDOM.render(
    <div>
        <HolkPlantillas />
        <Plantilla title="{titulo de la plantilla}" />
        <Plantilla title="{otro titulo}" />
        <Plantilla title="{OTRO titulo}" />
        <Plantilla title="meme del MES!" />
        <Plantilla title="{titulo de la plantilla}" />
        <Plantilla title="{titulo de la plantilla}" />
        <Plantilla title="PENE" />
        <Plantilla title="PENE" />
        <Plantilla title="{titulo de la plantilla}" />
        <Plantilla title="{titulo de la plantilla}" />

    </div>, document.getElementById('wrap'));
