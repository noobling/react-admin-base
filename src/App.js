import React from 'react'
import {Admin, Resource} from 'react-admin'
import buildGraphcoolProvider from 'ra-data-graphcool'

class App extends React.Component {
  constructor() {
    super()
    this.state = { dataProvider: null}
  }

  async componentDidMount() {
    const dataProvider = await buildGraphcoolProvider({clientOptions: {uri: }})

    this.setState({dataProvider})
  }

  render() {
    const { dataProvider } = this.state;

    if (!dataProvider) {
        return <div>Loading</div>;
    }

    return (
        <Admin dataProvider={dataProvider}>
            <Resource name="Post" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete} />
        </Admin>
    );
  }
}