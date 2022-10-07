import React, { useState } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import axios from "axios";
import { useNavigate } from "react-router";



function Modal2022(params) {
  const [show, setShow] = useState(true);
  const user = params.user
  const navigate = useNavigate();

  const generateClues = async (e) => {
    console.log(user);
    let userClue1 = { clue_id: 1, user_id: user, completed: false, year: 2022}
    let userClue2 = { clue_id: 2, user_id: user, completed: false, year: 2022}
    let userClue3 = {clue_id: 3, user_id: user, completed: false, year: 2022}
    let userClue4 = {clue_id: 4, user_id: user, completed: false, year: 2022}
    let userClue5 ={clue_id: 5, user_id: user, completed: false, year: 2022}
    let userClue6 = {clue_id: 6, user_id: user, completed: false, year: 2022}
    let userClue7 = {clue_id: 7, user_id: user, completed: false, year: 2022}
    let userClue8 ={clue_id: 8, user_id: user, completed: false, year: 2022}
    let userClue9 = {clue_id: 9, user_id: user, completed: false, year: 2022}

    // test user: me@me.com
    // pw: 3453777
    
    try {
      let res1 = await axios.post(`/api/userclues`, userClue1);
      let res2 = await axios.post(`/api/userclues`, userClue2);
      let res3 = await axios.post(`/api/userclues`, userClue3);
      let res4 = await axios.post(`/api/userclues`, userClue4);
      let res5 = await axios.post(`/api/userclues`, userClue5);
      let res6 = await axios.post(`/api/userclues`, userClue6);
      let res7 = await axios.post(`/api/userclues`, userClue7);
      let res8 = await axios.post(`/api/userclues`, userClue8);
      let res9 = await axios.post(`/api/userclues`, userClue9)
      console.log(res1)
      console.log(res2)
      console.log(res3)
    } catch (err) {
      console.log(err);
      console.log(err.response);
    }

  }

  const handleClick = () => {
    generateClues();
    setShow(false);
    navigate('/');
  }

  return (
    <Modal
          onClose={() => setShow(false)}
          onOpen={() => setShow(true)}
          open={show}
          trigger={<Button>Start 2022 Scavenger Hunt</Button>}
        >
          <Modal.Header>It's Time for Park Hop 2022!</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <p>
                Are you ready to start looking for clues at parks across the Upstate?
              </p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={() => setShow(false)}>
              Not Now
            </Button>
            <Button
              content="Start Hopping!"
              labelPosition='right'
              icon='checkmark'
              onClick={() => handleClick()}
              positive
            />
          </Modal.Actions>
        </Modal>
  )
}

export default Modal2022