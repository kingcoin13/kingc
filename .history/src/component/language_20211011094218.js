class Language {

    e = () => {
        const lang = localStorage.getItem("language");
        if (lang === "zh_CN") {
            return this.zh_CN;
        } else if (lang === "en_US") {
            return this.en_US;
        } else if (lang === "be_BY") {
            return this.be_BY;
        } else if (lang === "ja_JP") {
            return this.ja_JP;
        } else if (lang === "ko_KR") {
            return this.ko_KR;
        } else {
            let localUtc = new Date().getTimezoneOffset() / 60;
            if (localUtc === -8) {
                return this.zh_CN;
            } else {
                return this.en_US;
            }
        }
    }

    en_US = {
        text: "Language",
        warn: "Venture capital, cautious participation.",
        copySucc: "Copy success",
        copy: "Copy",
        Button: {
            Ok: "Ok",
            Cancel: "Cancel"
        },
        fund: {
            title: "Guarantee funds [Start]",
            poolAmount: "Pool of funds",
            fundAmount: "Guarantee fund",
            total: "Total",
            close: "Lucky codes"
        },
        account: {
            title: "Account",
            change: "Change",
            balance: "Balance",
            invest: "Invest",
            withdraw: "Withdraw",
            reinvest: "Reinvest",
            amount: "Amount",
            trigger: "Trigger Income",
            staticReward: "Daily Fixed Income",
            dynamicReward: "Daily Referral Income",
            canWithdraw: "Collect Amount",
            value: "Fixed Income Limit",
            returnValue: " Total Fixed Income ",
            totalAynamicReward: " Total Referral Income",
            rule: "Contract Rule",

            modal: {
                title: "Invest",
                code: "Invitation code",
                value: "Value",
                cancel: "Cancel",
                submit: "Submit"
            },
            records: {
                id: "ID",
                title: "Records",
                time: "Remaining days",
                amount: "Amount",
                profit: "Profit",
                total: "Total",
                state: "Can Withdraw",
                stateValues: ["Done", "Yes", "No"]
            },
            recommend: {
                title: "Recommend info",
                invitationCode: "Invitation code",
                inviteNumber: "Number of invitations",
                achievement: "Achievement",

                level: "Level",
                count: "Count",
                profit: "Share profit",
                achieveDetail: "Achievement",
                state: "Can Gain",
                stateValues: ["Yes", "No"],
                yields:{
                    title:"Yield",
                    harvest:"Harvest"
                }
            }
        },
        rule: `NFTCLUB匿名隐私智能合约挖矿规则： 
 
1.以推荐码做为链接关系，请玩家向推NFTCLUB匿名隐私智能合约挖矿规则： 
 
1.以推荐码做为链接关系，请玩家向推荐人索取推荐码后再参与；
 
2.参与范围：10 枚NFTCLUB及以上；
 
3.静态收益 
1) 参与后，立即显示投资额3倍的静态收益额度，此额度可随时追加；
2) 静态收益每天拿出合约池总币量的1%给所有玩家平均分配，直到静态收益3倍于投资额，自动触发合约停止。 
3) 停止后可复投续约，每天收益可提现可复投 
 
4.分享收益 
 ① 分享收益有烧伤，即计算分享收益时，按分享人与被分享人的本金两者中较小者计算。额度达到10万及10万以上NFTCLUB则奖金无烧伤 
 ② 永久享受一层被分享人静态收益的100% 
 ③ 直接分享业绩达2万NFTCLUB，可享受二层被分享人静态收益的10% ，直接分享业绩每增加1万NFTCLUB，可增加享受多1层被分享人静态收益的10%，最高可享受20层 
  分享收益每日结算，可提现可复投 ……
 
5.一币双挖:
        通过复投NFTCLUB免费产出KINGCLUB，
         KINGCLUB总量21万枚，10年挖完。
6.系统开源，数据上链，代码写定，去中心化记账，没有后门无法篡改，自动运行，每日8.00自动分发。
7.合约开源地址
8.合约地址
9.系统公开合约规则及默认推荐码，玩家可在无推荐人的情况下主动参与。
10.隐私自由共享盛宴，打造属于每位玩家的KINGCLUB王者俱乐部！`,
        
        rule1: 'Default referral code:hAYBo5yIHmP'
    };


    zh_CN = {
        text: "语言",
        warn: "风险投资 谨慎参与",
        copySucc: "复制成功",
        copy: "复制",
        Button: {
            Ok: "确定",
            Cancel: "取消"
        },
        fund: {
            title: "保障基金[启动中]",
            poolAmount: "资金池",
            fundAmount: "保障基金",
            total: "总金额",
            close: "中奖名单"
        },
        account: {
            title: "我的账户",
            change: "切换",
            balance: "账户余额",
            invest: "投资",
            withdraw: "提现",
            reinvest: "复投",
            trigger: "触发收益",
            staticReward: "当天静态收益",
            dynamicReward: "当天分享收益",
            canWithdraw: "收款归集",
            value: "静态收益额度",
            returnValue: "累计静态收益",
            totalAynamicReward: "累计分享收益",
            rule: "合约规则",
            modal: {
                title: "投资",
                code: "分享码",
                value: "金额",
                cancel: "取消",
                submit: "提交"
            },
            recommend: {
                title: "我的业绩",
                invitationCode: "分享码",
                inviteNumber: "直推人数",
                achievement: "直推有效业绩",

                level: "层级",
                count: "人数",
                profit: "分享收益",
                achieveDetail: "有效业绩",
                state: "状态",
                stateValues: ["可拿", "不可拿"],
                yields:{
                    title:"收成",
                    harvest:"收取"
                }
            }
        },
        rule: `NFTCLUB匿名隐私智能合约挖矿规则： 
 
1.以推荐码做为链接关系，请玩家向推NFTCLUB匿名隐私智能合约挖矿规则： 
 
1.以推荐码做为链接关系，请玩家向推荐人索取推荐码后再参与；
 
2.参与范围：10 枚NFTCLUB及以上；
 
3.静态收益 
1) 参与后，立即显示投资额3倍的静态收益额度，此额度可随时追加；
2) 静态收益每天拿出合约池总币量的1%给所有玩家平均分配，直到静态收益3倍于投资额，自动触发合约停止。 
3) 停止后可复投续约，每天收益可提现可复投 
 
4.分享收益 
 ① 分享收益有烧伤，即计算分享收益时，按分享人与被分享人的本金两者中较小者计算。额度达到10万及10万以上NFTCLUB则奖金无烧伤 
 ② 永久享受一层被分享人静态收益的100% 
 ③ 直接分享业绩达2万NFTCLUB，可享受二层被分享人静态收益的10% ，直接分享业绩每增加1万NFTCLUB，可增加享受多1层被分享人静态收益的10%，最高可享受20层 
  分享收益每日结算，可提现可复投 ……
 
5.一币双挖:
        通过复投NFTCLUB免费产出KINGCLUB，
         KINGCLUB总量21万枚，10年挖完。
6.系统开源，数据上链，代码写定，去中心化记账，没有后门无法篡改，自动运行，每日8.00自动分发。
7.合约开源地址
8.合约地址
9.系统公开合约规则及默认推荐码，玩家可在无推荐人的情况下主动参与。
10.隐私自由共享盛宴，打造属于每位玩家的KINGCLUB王者俱乐部！`,
        rule1: '默认推荐码：hAYBo5yIHmP'
    };


    ja_JP = {
        text: "言語",
        warn: "ベンチャーキャピタル",
        copySucc: "コピー成功",
        copy: "コピー",
        Button: {
            Ok: "確認する",
            Cancel: "キャンセルする"
        },
        fund: {
            title: "保障基金[启动中]",
            poolAmount: "资金池",
            fundAmount: "保障基金",
            total: "总金额",
            close: "中奖名单"
        },
        account: {
            title: "マイアカウント",
            change: "スイッチ",
            balance: "口座残高",
            invest: "投資する",
            withdraw: "撤退",
            reinvest: "再投資",
            amount: "私の収入",
            trigger: "トリガー収入",
            staticReward: "毎日の固定収入",
            dynamicReward: "毎日の紹介収入",
            canWithdraw: "金額を集める",
            value: "固定収入限界",
            returnValue: "累積固定収入",
            totalAynamicReward: " 累積紹介収入",
            rule: "契約ルール",

            modal: {
                title: "投資",
                code: "招待コード",
                value: "量",
                cancel: "キャンセル",
                submit: "提出すること"
            },
            records: {
                id: "ID",
                title: "私の投資",
                time: "有効期限",
                amount: "元本金額",
                profit: "利益",
                state: "状態",
                total: "Total",
                stateValues: ["Done", "Yes", "No"]
            },
            recommend: {
                title: "私のパフォーマンス",
                invitationCode: "招待コード",
                inviteNumber: "招待数",
                achievement: "直販",

                level: "レベル",
                count: "ピープル",
                achieveDetail: "私の業績",
                state: "状態",
                stateValues: ["Yes", "No"],
                yields:{
                    title:"利回り",
                    harvest:"収穫"
                }
            }
        },
        rule: `NFTCLUB匿名隐私智能合约挖矿规则： 
 
1.以推荐码做为链接关系，请玩家向推NFTCLUB匿名隐私智能合约挖矿规则： 
 
1.以推荐码做为链接关系，请玩家向推荐人索取推荐码后再参与；
 
2.参与范围：10 枚NFTCLUB及以上；
 
3.静态收益 
1) 参与后，立即显示投资额3倍的静态收益额度，此额度可随时追加；
2) 静态收益每天拿出合约池总币量的1%给所有玩家平均分配，直到静态收益3倍于投资额，自动触发合约停止。 
3) 停止后可复投续约，每天收益可提现可复投 
 
4.分享收益 
 ① 分享收益有烧伤，即计算分享收益时，按分享人与被分享人的本金两者中较小者计算。额度达到10万及10万以上NFTCLUB则奖金无烧伤 
 ② 永久享受一层被分享人静态收益的100% 
 ③ 直接分享业绩达2万NFTCLUB，可享受二层被分享人静态收益的10% ，直接分享业绩每增加1万NFTCLUB，可增加享受多1层被分享人静态收益的10%，最高可享受20层 
  分享收益每日结算，可提现可复投 ……
 
5.一币双挖:
        通过复投NFTCLUB免费产出KINGCLUB，
         KINGCLUB总量21万枚，10年挖完。
6.系统开源，数据上链，代码写定，去中心化记账，没有后门无法篡改，自动运行，每日8.00自动分发。
7.合约开源地址
8.合约地址
9.系统公开合约规则及默认推荐码，玩家可在无推荐人的情况下主动参与。
10.隐私自由共享盛宴，打造属于每位玩家的KINGCLUB王者俱乐部！`,
        
        rule1: 'デフォルトの紹介コード：hAYBo5yIHmP'
    };


    be_BY = {
        text: "язык",
        warn: "Венчурный капитал",
        copySucc: "Копирование успешно",
        copy: "копия",
        Button: {
            Ok: "Подтверждение",
            Cancel: "отменен"
        },
        fund: {
            title: "Защитный фонд [Инициирование]",
            poolAmount: "Фонд пула",
            fundAmount: "Фонд защиты",
            total: "Общая сумма",
            close: "Список победителей"
        },

        account: {
            title: "Мой аккаунт",
            change: "менять",
            balance: "Остаток средств",
            invest: "Вкладывать деньги",
            withdraw: "Снять со счета",
            reinvest: "Реинвестировать",
            amount: "Мой доход",
            trigger: " Доход триггера ",
            staticReward: " Ежедневный фиксированный доход ",
            dynamicReward: " Реферальный ежедневный доход ",
            canWithdraw: " Собрать сумму ",
            value: " Фиксированный лимит дохода ",
            returnValue: " Общий фиксированный доход ",
            totalAynamicReward: " Общий доход рефералов ",
            rule: "Правило договора",
            game: {
                title: "Фонд защиты [Старт]",
                poolAmount: "Пул Фонд",
                fundAmount: "Фонд защиты",
                all: "Общая сумма"
            },
            modal: {
                title: "инвестиции",
                code: "Код приглашения",
                value: "Сумма",
                cancel: "Отмена",
                submit: "покоряться"
            },
            records: {
                id: "ID",
                title: "мои инвестиции",
                time: "Дата окончания срока",
                amount: "Основная сумма",
                profit: "прибыль",
                state: "Положение дел",
                total: "общий",
                stateValues: ["Done", "Yes", "No"]
            },
            recommend: {
                title: "Мое выступление",
                invitationCode: "Код приглашения",
                inviteNumber: "Количество приглашений",
                achievement: "Прямые продажи",

                level: "уровень",
                count: "Количество людей",
                achieveDetail: "Мое достижение",
                state: "Положение дел",
                stateValues: ["Yes", "No"],
                yields:{
                    title:"Даходнасць",
                    harvest:"Ураджай"
                }
            }
        },

       rule: `NFTCLUB匿名隐私智能合约挖矿规则： 
 
1.以推荐码做为链接关系，请玩家向推NFTCLUB匿名隐私智能合约挖矿规则： 
 
1.以推荐码做为链接关系，请玩家向推荐人索取推荐码后再参与；
 
2.参与范围：10 枚NFTCLUB及以上；
 
3.静态收益 
1) 参与后，立即显示投资额3倍的静态收益额度，此额度可随时追加；
2) 静态收益每天拿出合约池总币量的1%给所有玩家平均分配，直到静态收益3倍于投资额，自动触发合约停止。 
3) 停止后可复投续约，每天收益可提现可复投 
 
4.分享收益 
 ① 分享收益有烧伤，即计算分享收益时，按分享人与被分享人的本金两者中较小者计算。额度达到10万及10万以上NFTCLUB则奖金无烧伤 
 ② 永久享受一层被分享人静态收益的100% 
 ③ 直接分享业绩达2万NFTCLUB，可享受二层被分享人静态收益的10% ，直接分享业绩每增加1万NFTCLUB，可增加享受多1层被分享人静态收益的10%，最高可享受20层 
  分享收益每日结算，可提现可复投 ……
 
5.一币双挖:
        通过复投NFTCLUB免费产出KINGCLUB，
         KINGCLUB总量21万枚，10年挖完。
6.系统开源，数据上链，代码写定，去中心化记账，没有后门无法篡改，自动运行，每日8.00自动分发。
7.合约开源地址
8.合约地址
9.系统公开合约规则及默认推荐码，玩家可在无推荐人的情况下主动参与。
10.隐私自由共享盛宴，打造属于每位玩家的KINGCLUB王者俱乐部！`,
        
        rule1: 'Реферальный код по умолчанию:hAYBo5yIHmP'
    };

    ko_KR = {
        text: "언어",

        warn: "벤처 캐피탈",
        copySucc: "복사 성공",
        copy: "복사",
        Button: {
            Ok: "확인",
            Cancel: "취소"
        },
        fund: {
            title: "보호 기금 [시작]",
            poolAmount: "기금 풀",
            fundAmount: "보호 기금",
            total: "총액",
            close: "수상자 목록"
        },
        account: {
            title: "내 계정",
            change: "스위치",
            balance: "계좌 잔액",
            invest: "사다",
            withdraw: "철수",
            reinvest: "재투자",
            amount: "나의 소득",
            trigger: "소득 트리거",
            staticReward: "일일 고정 수입",
            dynamicReward: "추천 일일 소득",
            canWithdraw: "금액 수집",
            value: "고정 수입 한도",
            returnValue: "누적 고정 수입",
            totalAynamicReward: " 누적 추천 소득",
            rule: "계약 규칙",
            game: {
                title: "보호 기금 [시작]",
                poolAmount: "자금 수영장",
                fundAmount: "보호 기금",
                all: "총액"
            },
            modal: {
                title: "투자",
                code: "초대 코드",
                value: "금액",
                cancel: "취소",
                submit: "제출"
            },
            records: {
                id: "ID",
                title: "내 투자",
                time: "만료일",
                amount: "교장",
                profit: "이익",
                state: "지위",
                stateValues: ["Done", "Yes", "No"]
            },
            recommend: {
                title: "내 공연",
                invitationCode: "초대 코드",
                inviteNumber: "초대장 수",
                achievement: "직접 판매",

                level: "수평",
                count: "사람",
                achieveDetail: "나의 업적",
                state: "지위",
                stateValues: ["Yes", "No"],
                yields:{
                    title:"수율",
                    harvest:"수확"
                }
            }
        },
        rule: `NFTCLUB匿名隐私智能合约挖矿规则： 
 
1.以推荐码做为链接关系，请玩家向推NFTCLUB匿名隐私智能合约挖矿规则： 
 
1.以推荐码做为链接关系，请玩家向推荐人索取推荐码后再参与；
 
2.参与范围：10 枚NFTCLUB及以上；
 
3.静态收益 
1) 参与后，立即显示投资额3倍的静态收益额度，此额度可随时追加；
2) 静态收益每天拿出合约池总币量的1%给所有玩家平均分配，直到静态收益3倍于投资额，自动触发合约停止。 
3) 停止后可复投续约，每天收益可提现可复投 
 
4.分享收益 
 ① 分享收益有烧伤，即计算分享收益时，按分享人与被分享人的本金两者中较小者计算。额度达到10万及10万以上NFTCLUB则奖金无烧伤 
 ② 永久享受一层被分享人静态收益的100% 
 ③ 直接分享业绩达2万NFTCLUB，可享受二层被分享人静态收益的10% ，直接分享业绩每增加1万NFTCLUB，可增加享受多1层被分享人静态收益的10%，最高可享受20层 
  分享收益每日结算，可提现可复投 ……
 
5.一币双挖:
        通过复投NFTCLUB免费产出KINGCLUB，
         KINGCLUB总量21万枚，10年挖完。
6.系统开源，数据上链，代码写定，去中心化记账，没有后门无法篡改，自动运行，每日8.00自动分发。
7.合约开源地址
8.合约地址
9.系统公开合约规则及默认推荐码，玩家可在无推荐人的情况下主动参与。
10.隐私自由共享盛宴，打造属于每位玩家的KINGCLUB王者俱乐部！`,
        
        rule1: '기본 추천 코드 :hAYBo5yIHmP'
    };

};

const lang = new Language();
export default lang