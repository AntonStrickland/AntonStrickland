import _ from 'lodash'
import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

const tableData = [
  { title: 'Detective Butler', type: 'Video game', duties: 'Lead programmer', skills: 'C++, SDL, OpenGL',  employer: 'Goldbar Games', year: '2013', link: 'http://store.steampowered.com/app/612620/Detective_Butler_Maiden_Voyage_Murder/' },
  { title: 'Nekouzan: Maze Miner', type: 'Video game', duties: 'Lead programmer',  skills: 'Unity3D, C#',  employer: 'Goldbar Games', year: '2017', link: 'https://play.google.com/store/apps/details?id=com.GoldbarGames.MazeMiner&hl=en_US' },
  { title: 'Cruise Ship Cleanup', type: 'Video game', duties: 'Lead programmer',  skills: 'Unity3D, C#',  employer: 'Goldbar Games', year: '2017', link: 'https://play.google.com/store/apps/details?id=com.GoldbarGames.CruiseShipCleanup&hl=en_US' },
  { title: 'Snowball Saves Christmas', type: 'Video game', duties: 'Lead programmer',  skills: 'Unity3D, C#',  employer: 'Goldbar Games', year: '2017', link: 'https://play.google.com/store/apps/details?id=com.GoldbarGames.SnowballSavesChristmas&hl=en_US' },
  { title: 'Snowball Saves Summer', type: 'Video game', duties: 'Lead programmer', skills: 'Unity3D, C#',   employer: 'Goldbar Games', year: '2018', link: 'https://store.steampowered.com/app/839130/Snowball_Saves_Summer/' },
  { title: 'Witch Doctor Kaneko', type: 'Video game', duties: 'Lead programmer', skills: 'Unity3D, C#',   employer: 'Goldbar Games', year: '2019', link: 'https://www.goldbargames.com/witch-doctor-kaneko/' },
  { title: 'antonstrickland.com', type: 'Website', duties: 'Lead programmer', skills: 'NodeJS, Heroku', employer: 'Anton Strickland', year: '2019', link: 'https://www.antonstrickland.com/' },
  { title: 'goldbargames.com', type: 'Website', duties: 'Lead programmer', skills: 'Ruby, PHP', employer: 'Goldbar Games', year: '2015', link: 'https://www.goldbargames.com/' },
  { title: 'store.goldbargames.com', type: 'Website', duties: 'Lead programmer', skills: 'Shopify', employer: 'Goldbar Games', year: '2018', link: 'https://store.goldbargames.com/' },
  { title: 'Umbra: Phase 2', type: 'Video game', duties: 'GUI programming', skills: 'Python',  employer: 'Black Witch Project', year: '2016', link: 'https://lemmasoft.renai.us/forums/viewtopic.php?t=33761' },
  { title: 'Voyage Without Purpose', type: 'Video game', duties: 'Lead programmer',  skills: 'Unity3D, C#',  employer: 'Black Witch Project', year: '2018', link: '#' },
  { title: 'Driftwood', type: 'Video game', duties: 'GUI programming', skills: 'Python', employer: 'Wakagana', year: '2015', link: 'https://store.steampowered.com/app/510750/Driftwood_The_Visual_Novel/' },
  { title: 'Pitch Black Serenade', type: 'Video game', duties: 'Minigame programming',  skills: 'Python', employer: '97 Circle', year: '2018', link: 'https://97circle.itch.io/pitch-black-serenade' },
  { title: 'Indecent Desires', type: 'Video game', duties: 'GUI programming',  skills: 'Python', employer: 'Vilelab', year: '2018', link: 'https://www.patreon.com/vilelab/overview' },
  { title: 'Gold Mine Sweeper', type: 'Video game', duties: 'Lead programmer',  skills: 'Unity3D, C#', employer: 'Street Corner Cat Studio', year: '2018', link: 'https://www.freelancer.com/projects/mobile-phone/build-minesweeper-like-game-Unity/' },
]

export default class ProjectTable extends Component {
  state = {
    column: null,
    data: tableData,
    direction: null,
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  componentDidMount() {
    const clickedColumn = 'year';
    const {  data } = this.state;

    this.setState({
      column: clickedColumn,
      data: _.sortBy(data, [clickedColumn]),
      direction: 'ascending',
    })
  }

  render() {
    const { column, data, direction } = this.state;

    return (
      <Table sortable celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === 'title' ? direction : null}
              onClick={this.handleSort('title')}
            >
              Title
            </Table.HeaderCell>

            <Table.HeaderCell
              sorted={column === 'type' ? direction : null}
              onClick={this.handleSort('type')}
            >
              Type
            </Table.HeaderCell>

            <Table.HeaderCell
              sorted={column === 'duties' ? direction : null}
              onClick={this.handleSort('duties')}
            >
              Duties
            </Table.HeaderCell>

              <Table.HeaderCell
                sorted={column === 'skills' ? direction : null}
                onClick={this.handleSort('skills')}
              >
                Skills
            </Table.HeaderCell>

            <Table.HeaderCell
              sorted={column === 'employer' ? direction : null}
              onClick={this.handleSort('employer')}
            >
              Employer
            </Table.HeaderCell>

            <Table.HeaderCell
              sorted={column === 'year' ? direction : null}
              onClick={this.handleSort('year')}
            >
              Year
            </Table.HeaderCell>

          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(data, ({ type, duties, skills, employer, year, link, title }) => (
            <Table.Row key={title}>
              <Table.Cell><a href={link}>{title}</a></Table.Cell>
              <Table.Cell>{type}</Table.Cell>
              <Table.Cell>{duties}</Table.Cell>
              <Table.Cell>{skills}</Table.Cell>
              <Table.Cell>{employer}</Table.Cell>
              <Table.Cell>{year}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )
  }
}
