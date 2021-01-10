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
                Join our membership to elevate your business today
            </SignUpSubHeading>
            <SignUpSubText>
                You can unsubscribe at any given moment
            </SignUpSubText>
            <Form>
                <FormInput name='email' type='email' placeholder='Your Email' />
                <Button fontBig>Subscribe</Button>
            </Form>
        </SignUpSubscription>
    </SignUpContainer>
    )
}

export default SignUp
