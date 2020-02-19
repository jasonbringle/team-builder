import React from "react";
import styled from "styled-components";

const Member = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
`;

const MemCard = styled.div`
  display: flex;
  flex-direction: column;
  align-content:center;
  text-align: left;
  width: 50%;
  border: 2px solid red;
`;

function TeamMembers(props) {
  console.log("teammember props", props);

  return (
    <Member>
      {props.teamMember.map((member, index) => {
        return (
          <MemCard key={index}>
            <p>{member.fname}</p>
            <p>{member.lname}</p>
            <p>{member.role}</p>
          </MemCard>
        );
      })}
    </Member>
  );
}
export default TeamMembers;
