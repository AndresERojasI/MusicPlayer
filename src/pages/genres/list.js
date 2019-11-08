import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {loadGenres} from '../../actions/genres_actions'
import textFormat from '../../utils/formatText'

export class List extends Component {

    componentWillMount() {
        this.props.loadGenres()
    }
    
    renderList = genres => genres.map(genre => {
        return <div key={genre}>{textFormat(genre)}</div>
    })

    render() {
        const {list, loading} = this.props
        if(loading) {
            return (<div>
                Loading...
            </div>)
        }

        const genresList = this.renderList(list)
        return (
            <div>
                {genresList}
            </div>
        )
    }
}

List.propTypes = {
    genres: PropTypes.array
}

List.defaultProps = {
    genres: []
}

const mapStateToProps = (state) => ({
    loading: state.genre.loading,
    list: state.genre.genreList
})

const mapDispatchToProps = {
    loadGenres
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
