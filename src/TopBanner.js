import React, { Component } from 'react';
import { Container, Advertisement } from 'semantic-ui-react';

export default class TopBanner extends Component {

    render() {
        return (
            <Container fluid centered='true'>
                    <Advertisement unit='banner' test='Top Banner' centered test='MaxBostonMeetup'/>
            </Container>
        )
    }
}