import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal
      title="Tatar Lanuage Wordle Clone"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <h3 className="text-md text-gray-500 dark:text-gray-300">How to play</h3>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in 6 tries.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="W"
          status="correct"
        />
        <Cell value="E" />
        <Cell value="A" />
        <Cell value="R" />
        <Cell value="Y" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter W is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="I" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="L"
          status="present"
        />
        <Cell value="O" />
        <Cell value="T" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter L is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="V" />
        <Cell value="A" />
        <Cell value="G" />
        <Cell isRevealing={true} isCompleted={true} value="U" status="absent" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter U is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is a fork of an open source project.{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          source code
        </a>{' '}
        See the{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          original project
        </a>{' '}
      </p>
    </BaseModal>
  )
}
