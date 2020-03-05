import React, { Component } from 'react';
import { Container, Label, Segment, Item, Header, Menu, Responsive, Card, Icon, Grid, Image, Table, CardContent } from 'semantic-ui-react';
import Bar from './Bar.js';
import Tabs from './Tabs.js';
import TopBanner from './TopBanner.js';
const square = { width: 175, height: 175 }
const sections = [
    { key: 'home', content: <Header as='h1' href="http://www.google.com">Mailing list</Header>, link: true },
    { key: 'registration', content: 'Code of Conduct', link: true },
    { key: 'info', content: 'RSVP', active: true },
    { key: 'code', content: 'Code of Conduct', active: true },
]
const getWidth = () => {
    const isSSR = typeof window === 'undefined'

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}
export default class Layout extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <div>
                <Container fluid centered='true'>
                    <Segment vertical>
                        <Grid columns={1} divided textAlign='center'>
                            <Grid.Row columns={1}>
                                <Grid.Column>
                                    <Image src='./logo.png' size='large' rounded centered />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={2}>
                                <Grid.Column>
                                    <Menu  widths={3}>
                                        <Menu.Item href='//google.com' target='_blank'>Contact</Menu.Item>
                                        <Menu.Item href='//google.com' target='_blank'>Mailing List</Menu.Item>
                                        <Menu.Item href='//google.com' target='_blank'>Code of Conduct</Menu.Item>
                                    </Menu>
                                </Grid.Column>
                            </Grid.Row>

                            <Grid.Row columns={2}  >
                                <Grid.Column>
                                    <Card fluid>
                                    {/* <Image src='logo.png' size='medium' wrapped ui={false} /> */}
                                        <Card.Content textAlign='left'>
                                            <Card.Header>March 27, 2020 - 6:30pm</Card.Header>
                                            <Card.Meta>
                                                <span className='date'>Black Math</span>
                                            </Card.Meta>
                                            <Card.Description>
                                                Judy Dunaway
                                            </Card.Description>
                                            <Card.Description>
                                                Nikhil
                                            </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                            RSVP
                                        </Card.Content>
                                    </Card>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Container>
            </div>
        )
    }
}