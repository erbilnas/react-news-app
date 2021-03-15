import React from 'react'
import { Alert } from 'react-bootstrap'

export const LandingPage = () => {
    return (
        <div className="home-container">
            <Alert variant="info">
                <Alert.Heading className="landingPageTitle">Rise and shine, Mr. Freeman</Alert.Heading>
                <p>
                    Rise and... shine.
                    Not that I... wish to imply you have been sleeping on the job.
                    No one is more deserving of a rest... and all the effort in the world would have gone to waste until... well, let's just say your hour has... come again.
                    The right man in the wrong place can make all the difference in the world.
                    So, wake up, Mr. Freeman. Wake up and... smell the ashes...
                </p>
            </Alert>
        </div>
    )
}