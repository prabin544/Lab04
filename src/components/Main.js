import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import HornedBeasts from './HornedBeasts';

class Main extends React.Component {

    render() {
        const { animalArray } = this.props;

        return (
            <CardColumns>
                {animalArray.map((animal, index) => {
                    return (
                        <HornedBeasts
                            title={animal.title}
                            description={animal.description}
                            imgUrl={animal.image_url}
                            keyword={animal.keyword}
                            horns={animal.horns}
                            key={index}
                            showFavePic={this.props.showFavePic}
                        />
                    );
                })}
            </CardColumns>
        );
    }
}

export default Main;