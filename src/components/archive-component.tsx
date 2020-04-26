import React from 'react'
import styled from 'styled-components'
import { ViewDataComponent } from './view-data-component'
import { Button } from 'semantic-ui-react'

export interface Employee {
  id: string
  name: string
  division: string
}

interface ArchiveState {
  employees: Employee[]
}

const ArchiveRoot = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  margin: 0.25em;
  overflow-y: auto;
`

export class ArchiveComponent extends React.Component<{}, ArchiveState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      employees: []
    }
  }

  public componentDidMount() {
    const archiveState = localStorage.getItem('archive-state')
    if (archiveState) {
      this.setState(JSON.parse(archiveState) as ArchiveState)
    }
  }

  public componentWillUnmount() {
    localStorage.setItem('archive-state', JSON.stringify(this.state))
  }

  public render() {
    return (
      <ArchiveRoot>
        <label><h1>Archive</h1></label>
        <div>
          <Button onClick={() => this.generateDataItems(2000)}>Load</Button>
          <Button onClick={() => this.clearDataItems()}>Clear</Button>
        </div>
        <ViewDataComponent employees={this.state.employees}></ViewDataComponent>
      </ArchiveRoot>
    )
  }

  private generateDataItems(numToGen: number) {
    const names = this.getNames()
    const divisions = [ 'Water', 'Finance', 'IT', 'Electricity', 'HR', 'Legal', 'Management' ]
    const employees: Employee[] = [...Array(numToGen).keys()].map((i) => ({
      id: (i + 1001).toString(),
      name: names[i % names.length],
      division: divisions[Math.floor(Math.random() * 100) % divisions.length]
    }) as Employee)
    this.setState({ employees })
  }

  private clearDataItems() {
    this.setState({ employees: [] })
  }

  private getNames(): string[] {
    return [
'Kieran Wise',
'Lorenzo Mcpherson',
'Joselyn Kaufman',
'Malia Schaefer',
'Cheyanne Spencer',
'Delaney Miles',
'Eliezer Oconnor',
'Kendall Gates',
'Kelton Carey',
'Annie Clarke',
'Mckayla Hopkins',
'Courtney Porter',
'Leland Schaefer',
'Jerry Kemp',
'Davion Becker',
'Camryn Park',
'Samantha Contreras',
'Tomas Kennedy',
'Miranda Bryant',
'Aydan Ballard',
'Katrina Brewer',
'Makena Walls',
'Erica Walters',
'King Ayers',
'Danika Maddox',
'Riley Graves',
'Muhammad Swanson',
'Bradyn Howard',
'Amirah Li',
'Jordyn Wolf',
'Summer Harding',
'Dakota Mcmahon',
'Kristin Castillo',
'Jaiden Buckley',
'Cadence Stephenson',
'Justus Wolf',
'Janessa Boyle',
'Jay Bond',
'Rory Ellison',
'Miley Turner',
'Raquel Anderson',
'Macie Rios',
'Tess Vance',
'Nick Velez',
'Miranda Carr',
'Tabitha Guerra',
'Brynn Steele',
'Danielle Rodgers',
'Kristen Holt',
'Irene Novak',
'Moises Juarez',
'Adriana Newman',
'Omari Harding',
'Jeremy Herman',
'Aurora Hendrix',
'Brenden Greer',
'Giuliana Taylor',
'Janet Silva',
'Allen Jackson',
'Emmanuel Mccall',
'Damaris Collier',
'Yosef Morton',
'Orlando Price',
'Cyrus King',
'Hallie Hays',
'Katelynn Stafford',
'Britney Barrera',
'Pablo Brady',
'Carmen Dalton',
'Cailyn Mcpherson',
'Isaias Robles',
'Eleanor Cherry',
'Guillermo Mullins',
'Rayan Bailey',
'Quinten Buck',
'Moises Collins',
'William Avila',
'Denise Bond',
'Kaia Townsend',
'Jack Mosley',
'John Estrada',
'Reina Morrow',
'Kai Bowers',
'Luis Pope',
'Selah Salazar',
'Payten Moody',
'Kasey Moreno',
'Gage Meyer',
'Adelyn Villegas',
'Colton Bowman',
'Orlando Brock',
'Ashlee Cooley',
'Tyrone Black',
'Skye Barker',
'Teagan Lam',
'Kelly Fitzgerald',
'Natasha Gonzales',
'Lorelei Jenkins',
'Allison Rosario',
'Damarion Washington',
    ]
  }
}
