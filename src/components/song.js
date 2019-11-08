import React from 'react'
import PropTypes from 'prop-types'

const song = props => {
    return (
        <section className="song">
            <span>id</span>: {this.props.id} <br/>
            <span>name</span>: {this.props.name} <br/>
            <span>spotify_url</span>: {this.props.spotify_url} <br/>
            <span>duration_ms</span>: {this.props.duration_ms} <br/>
            <span>explicit</span>: {this.props.explicit} <br/>
            <span>spotify_id</span>: {this.props.spotify_id} <br/>
            <span>album_id</span>: {this.props.album_id} <br/>
            <span>created_at</span>: {this.props.created_at} <br/>
            <span>updated_at</span>: {this.props.updated_at} <br/>
        </section>
    )
}

song.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    spotify_url: PropTypes.string,
    duration_ms: PropTypes.string,
    explicit: PropTypes.string,
    spotify_id: PropTypes.string,
    album_id: PropTypes.number,
    created_at: PropTypes.string,
    updated_at: PropTypes.string
}

song.defaultProps = {
    id: 0,
    name: '',
    spotify_url: '#',
    duration_ms: '',
    explicit: '',
    spotify_id: '',
    album_id: 0,
    created_at: '',
    updated_at: ''
}

export default song
