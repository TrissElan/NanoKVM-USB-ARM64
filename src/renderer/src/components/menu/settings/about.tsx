import { ReactElement, useEffect, useState } from 'react'
import { GithubOutlined } from '@ant-design/icons'
import { Divider } from 'antd'
import { useTranslation } from 'react-i18next'

import { IpcEvents } from '@common/ipc-events'
import icon from '@renderer/assets/images/icon.png'

export const About = (): ReactElement => {
  const { t } = useTranslation()

  const [version, setVersion] = useState('')

  const communities = [
    {
      name: 'GitHub',
      icon: <GithubOutlined style={{ fontSize: '20px' }} width={24} height={24} />,
      url: 'https://github.com/TrissElan/NanoKVM-USB-ARM64'
    }
  ]

  useEffect(() => {
    window.electron.ipcRenderer.invoke(IpcEvents.GET_APP_VERSION).then((ver) => {
      setVersion(ver)
    })
  }, [])

  function open(url: string): void {
    window.electron.ipcRenderer.send(IpcEvents.OPEN_EXTERNAL_RUL, url)
  }

  return (
    <>
      <div className="text-base font-bold">{t('settings.about.title')}</div>
      <Divider />

      <div className="pb-5 text-neutral-400">{t('settings.about.version')}</div>
      <div className="flex items-center space-x-5 pt-1 select-none">
        <img src={icon} className="pointer-events-none h-[64px] w-[64px]" alt="maix" />

        <div className="flex flex-col space-y-1">
          <span className="text-settings-active-foreground text-sm font-bold">NanoKVM-USB ARM64</span>
          <span className="text-settings-foreground text-xs">Based on Sipeed NanoKVM-USB</span>
          <span className="text-settings-foreground text-sm">{version}</span>
        </div>
      </div>
      <Divider />

      <div className="pb-5 text-neutral-400">{t('settings.about.community')}</div>
      <div className="my-3 flex space-x-5">
        {communities.map((community) => (
          <div
            key={community.name}
            className="flex h-20 w-20 cursor-pointer flex-col items-center justify-center space-y-2 rounded-lg text-neutral-300 outline outline-1 outline-neutral-700 hover:bg-neutral-800 hover:text-white focus:bg-neutral-800"
            onClick={() => open(community.url)}
          >
            {community.icon}
            <span className="text-xs">{community.name}</span>
          </div>
        ))}
      </div>
    </>
  )
}
