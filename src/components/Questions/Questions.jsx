import React from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { Question } from 'components/Question';
import './Questions.scss';
const listVariants = {
  visible: {
    scale: 1,
  },
  hidden: {
    scale: 0,
  }
}

export const Questions = ({ questions }) => {
  const { handleSubmit, register, control} = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <>
      {
        questions.length > 0 &&
        <AnimatePresence>
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="questions"
            layout
            variants={listVariants}
            initial='hidden'
            animate='visible'
            transition={{ duration: 0.5 }}
          >
            {
              questions.map((question, idx) =>
                <Question
                  question={question}
                  register={register}
                  control={control}
                  key={idx}
                />
              )
            }
            <Button
              variant="contained"
              size="small"
              sx={{ alignSelf: 'flex-start', ml: '1rem' }}
              type='submit'
            >
              Send
            </Button>
          </motion.form>
        </AnimatePresence>
      }
    </>
  )
}