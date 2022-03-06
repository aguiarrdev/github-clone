import React from 'react';

import { Container, Main, LeftSide, RightSide, Repos  } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';

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
                <RightSide>
                    <Repos>
                        <h2>Random repos</h2>

                        <div>
                            {[1,2,3,4,5,6].map(n => 
                                <RepoCard 
                                    key={n}
                                    username={'aguiarrdev'}
                                    reponame={'github-clone'}
                                    description={'ReactJS Github Clone'}
                                    language={ n % 3 === 0 ? 'Javascript' : 'TypeScript' }
                                    stars={6}
                                    forks={3}
                                />
                            )}
                        </div>
                    </Repos>
                </RightSide>
            </Main>
        </Container>
    )
};

export default Profile;