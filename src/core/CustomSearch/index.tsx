import { debounce } from 'radash'
import { ChangeEvent } from 'react'
import { useVoerkaI18n } from '@voerkai18n/react'

type IProps = {
  onChange: (value: string) => void
}

export default (props: IProps) => {
  const { onChange } = props
  const { t } = useVoerkaI18n()

  /**
   * 输入内容变化监听事件
   */
  const handleInputChange = debounce(
    { delay: 500 },
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      onChange(value)
    }
  )

  return (
    <div className='w-full'>
      <input
        className='w-full rounded-lg p-2.5 text-2xl font-light outline-none'
        type='text'
        placeholder={t('请输入关键词')}
        autoFocus
        onChange={handleInputChange}
      />
    </div>
  )
}
