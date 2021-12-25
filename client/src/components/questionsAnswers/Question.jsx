import React, { useState } from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';

export default function Question({ questionObj }) {
  const handleMappedAnswers = answersObj => {
    return Object.keys(answersObj).map(key => {
      return (
        <AnswerPortion key={key}>
          <AnswerContainer>
            <strong>A:</strong>
            <AnswerBody>{answersObj[key].body}</AnswerBody>
          </AnswerContainer>
          <AnswerDetails>
            <span>
              by: {answersObj[key].answerer_name},{' '}
              <Moment format='MM/DD/YYYY'>{answersObj[key].date}</Moment> |
              Helpful?{' '}
              <a href='#'>
                <u>Yes</u>
              </a>{' '}
              ({answersObj[key].helpfulness}) |{' '}
              <a href='#'>
                <u>Report</u>
              </a>
            </span>
          </AnswerDetails>
          {answersObj[key].photos.length > 0 && (
            <PhotoContainer>
              {/* <PhotoBody>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              alias, dignissimos sed itaque unde inventore in distinctio
              exercitationem blanditiis molestiae vel illum eius minus
              repudiandae rem sequi pariatur nobis! Voluptas.
            </PhotoBody> */}
              {/* <br /> */}
              <Photos>
                {answersObj[key].photos.map((photoSrc, idx) => (
                  <img
                    key={idx}
                    src={photoSrc}
                    width='200'
                    height='200'
                    loading='lazy'
                  />
                ))}
              </Photos>
              {/* <PhotoDetails>
              <span>
                by: <strong>Seller</strong>, | Helpful?{' '}
                <a href='#'>
                  <u>Yes</u>
                </a>{' '}
                (7) |{' '}
                <a href='#'>
                  <u>Report</u>
                </a>
              </span>
            </PhotoDetails> */}
            </PhotoContainer>
          )}
        </AnswerPortion>
      );
    });
  };

  return (
    <Container>
      <QuestionPortion>
        <QuestionLeftSection>
          <QuestionBody>Q: {questionObj.question_body}</QuestionBody>
        </QuestionLeftSection>
        <QuestionRightSection>
          <span>Helpful?</span>{' '}
          <a href='#'>
            <u>Yes</u>
          </a>{' '}
          <QuestionHelpfulCount>
            ({questionObj.question_helpfulness})
          </QuestionHelpfulCount>{' '}
          <a href='#'>
            <u>Add Answer</u>
          </a>
        </QuestionRightSection>
      </QuestionPortion>
      <br />
      {handleMappedAnswers(questionObj.answers)}
      <hr style={{ height: 0.5, borderColor: 'red' }} />
    </Container>
  );
}

const Container = styled.div``;

const QuestionPortion = styled.div``;

const QuestionLeftSection = styled.div``;

const QuestionRightSection = styled.div``;

const QuestionBody = styled.h4``;

const QuestionHelpfulCount = styled.span``;

const AnswerPortion = styled.div``;

const AnswerContainer = styled.div``;

const AnswerBody = styled.p``;

const AnswerDetails = styled.div``;

const PhotoContainer = styled.div``;

const PhotoBody = styled.p``;

const Photos = styled.div``;

const PhotoDetails = styled.div``;
