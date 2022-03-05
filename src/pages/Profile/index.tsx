import React from 'react';

import { Container, Main, LeftSide, RightSide } from './styles';
import ProfileData from '../../components/ProfileData';

const Profile: React.FC = () => {
    return (
        <Container>
            <Main>
                <LeftSide>
                    <ProfileData
                        username={'aguiarrdev'}
                        name={'Matheus Aguiar'}
                        avatarUrl={'https://avatars.githubusercontent.com/u/71287681?v=4'}
                        followers={10}
                        following={7}
                        company={'Company'}
                        location={'Gov. Valadares, Brasil'}
                        email={'aguiartgv@gmail.com'}
                        blog={'linkedin.com/in/aguiarrdev'}
                    >

                    </ProfileData>
                </LeftSide>
                <RightSide></RightSide>
            </Main>
        </Container>
    )
};

export default Profile;