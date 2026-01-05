import { ref } from 'vue';

const currentMenuId = ref('HOME');
const publicMenuList = () => {
  return [
    {
      id: 'COM',
      name: '회사소개',
      engName: 'ABOUT',
      menu: [
        {
          id: 'COM_01',
          name: '회사소개',
          desc: '미래를 창조하는 주식회사 포엠에스'
        },
        {
          id: 'COM_02',
          name: 'CEO인사말',
          desc: '미래를 창조하는 주식회사 포엠에스'
        },
        {
          id: 'COM_03',
          name: '회사연혁',
          desc: '다양한 업무 경험자로 구성된 주식회사 포엠에스'
        },
        {
          id: 'COM_04',
          name: '조직도',
          desc: '다양한 업무 경험자로 구성된 주식회사 포엠에스'
        },
        {
          id: 'COM_05',
          name: '오시는길',
          desc: '여기는 주식회사 포엠에스입니다'
        },
      ]
    },
    {
      id: 'BUS',
      name: '사업영역',
      engName: 'BUSINESS',
      menu: [
        {
          id: 'BUS_01',
          name: '사업영역',
          desc: '현장 경험을 바탕으로 고객 비즈니스에 최적화된 IT 솔루션 제공'
        },
        {
          id: 'BUS_02',
          name: 'SI컨설팅',
          desc: '안정적인 시스템 구축을 위한 실무 중심 SI 컨설팅 서비스'
        },
        {
          id: 'BUS_03',
          name: 'SI개발',
          desc: '민간, 공공, 금융 등 다양한 사업분야 개발'
        },
        {
          id: 'BUS_04',
          name: 'SI운영',
          desc: '안정적으로 고객의 시스템을 관리 및 운영'
        },
      ]
    },
    {
      id: 'SOL',
      name: '솔루션',
      engName: 'SOLUTION',
      menu: [
        {
          id: 'SOL_01',
          name: 'able bot',
          desc: '상황인지기반 챗봇'
        },
        {
          id: 'SOL_02',
          name: 'sally plan',
          desc: '잘 소비하기 위한 초간편 플래너'
        },
      ]
    },
    {
      id: 'PJT',
      name: '프로젝트',
      engName: 'PROJECT',
      menu: [
        {
          id: 'PJT_01',
          name: '주요프로젝트',
          desc: '주식회사 포엠에스는 다양한 업무를 수행하고 있습니다'
        },
        {
          id: 'PJT_02',
          name: '주요협력사',
          desc: '다양한 기업들과 협력하여 시스템 개발에 힘쓰고 있습니다'
        },
      ]
    },
  ]
};

export { currentMenuId, publicMenuList };
