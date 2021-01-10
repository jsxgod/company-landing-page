import React from 'react'
import { Button } from '../../globalStyles'
import {
    SignUpContainer,
    SignUpSubscription,
    SignUpSubHeading,
    SignUpSubText,
    Form,
    FormInput,
} from './SignUp.elements'

const SignUp = () => {
    return (
    <SignUpContainer>
        <SignUpSubscription>
            <SignUpSubHeading>
                Join our monthly membership to elevate your business starting today
            </SignUpSubHeading>
            <SignUpSubText>
                You can unsubscribe at any given moment
            </SignUpSubText>
            <Form>
                <FormInput name='email' type='email' placeholder='Your Email' />
                <Button primary fontBig>Subscribe</Button>
            </Form>
        </SignUpSubscription>
    </SignUpContainer>
    )
}

export default SignUp
