import React from 'react';
import PropTypes from "prop-types";
import {
    Card,
    Image
} from 'semantic-ui-react'

export default function UserDetail({ user }) {
    return (
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={user.avatar}
        />
        <Card.Header>{user.jobTitle}</Card.Header>
        <Card.Meta>{user.email}</Card.Meta>
        <Card.Description>
        </Card.Description>
      </Card.Content>
    </Card>
    )
}

UserDetail.propTypes = {
    user: PropTypes.shape({
        email: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        jobTitle: PropTypes.string.isRequired
    })
}