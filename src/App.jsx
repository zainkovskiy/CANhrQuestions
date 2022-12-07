import React, { useEffect, useState } from "react";

import './App.scss';
import { Header } from 'components/Header';
import { Title } from 'components/Title';
import { Linear } from 'components/Linear';
import { Questions } from 'components/Questions';

import { requestToServer } from "./api";

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    try {
      const res = await requestToServer();
      setData({
        "userId": 2198,
        "hrQuestions": [
          { "week": 1, "question": "Знаете ли вы какая у вас стипендия и из чего складывается?", "type": "check" },
          { "week": 1, "question": "Какие успехи? ", "type": "text" },
        ]
      })
    } catch (err) {
      setError(!error);
    } finally {
      setLoading(!loading);
    }
  }

  const whatsRender = () => {
    if (loading) {
      return <Linear />
    }
    if (error) {
      return <p className="text">error</p>
    }
    return <Questions questions={data?.hrQuestions || []}/>
  }

  return (
    <>
      <Header />
      <Title title='questions' />
      {
        whatsRender()
      }
    </>
  )
}