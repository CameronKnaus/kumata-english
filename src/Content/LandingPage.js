// Keeping all landing page text here for simplicity. Under normal circumstances all of this text content would be split up

const LANDING_TEXT = {
    kumataName: 'Kumata (くまた)',
    kumataOpeningLines: [
        '皆さん、こんにちは！ Kumataです！',
        'Kumata Englishのホームページにお越し頂き、ありがとうございます！',
        '楽しく英語を学びましょう！'
    ],
    profile: '【プロファイル】',
    // accoladesのところを編集するのを注意！順番が大切。
    accolades: [
        'フリーランス英会話講師',
        'フリーランス英語コーチ',
        'Instagramで毎日使えるフレーズを更新',
        'TOEIC 910点',
        'カナダ、バンクーバーへの留学経験有'
    ],
    imageAria: '英語が人生を楽しくしてくれる。あなたも英語で人生をより豊かにしませんか？',
    servicesHeader: {
        providedServices: '提供しているサービス',
        noteAboutModule: 'Scroll to learn more or press a button to jump to that section',
        lesson: 'レッスン',
        coaching: 'コーチング',
        youtube: 'ユーチューブ',
        instagram: 'インスタ'
    },
    costMenuSharedText: {
        howToApplyHeader: 'お申し込みはこちら↓',
        email: 'kumataenglish@gmail.com',
        emailLink: 'Kumataにメールを送信'
    },
    onlineLessons: {
        kumataTalk: {
            doubtsList: [
                '「英会話を始めたいけど、今更遅いよね？」',
                '「オンライン英会話を始めたけど全然話せるようにならない。。。」',
                'そういった方の為に、「話せるようになる」レッスンを提供します！'
            ],
            mySolution: 'そういった方の為に、「話せるようになる」レッスンを提供します！'
        },
        eikaiwa: 'オンライン英会話レッスン',
        manToMan: '【マンツーマン】',
        answerAllQuestions: 'マンツーマンレッスンなので、不明点は何でも質問して頂けます！',
        serviceDescription: '僕自身、英語を学生から今まで勉強してきて、「こんなレッスンがあったら、もっと早く覚えることができるのに」と思うことが何度もありました。その内容を詰め込み、語彙力や、様々なフレーズを使えるようになる為のレッスンです！レッスン内で何度も復習・練習するので、繰り返していくごとに自分の意見を言えるようになっていきます！',
        lessonDetailsTitle: '【レッスンの特徴】',
        lessonDetailsList: [
            {
                text: '発音のコツをお教えします！',
                isMainPoint: true
            },
            {
                text: '→ 正しく発音できると、モチベーションがかなり上がる！',
                isMainPoint: false
            },
            {
                text: '文法の基礎知識も丁寧に教えます！',
                isMainPoint: true
            },
            {
                text: '→ 文法がしっかりしていればいるほど、長文を話せるようになります！',
                isMainPoint: false
            },
            {
                text: '「実際に」よく使うフレーズをシェアします！',
                isMainPoint: true
            },
            {
                text: '→ 教科書では学べない、かなり使えるフレーズ集なども紹介します！！',
                isMainPoint: false
            }
        ],
        targetAudience: '【対象になる方】',
        targetAudienceList: [
            'そもそも英語が全くわからない方',
            '文法を1から勉強したい方',
            '海外旅行でコミュニケーションを取れるようになりたい方',
            '英会話の機会が欲しい方',
            '何か新しい趣味が欲しい方',
            '発音を綺麗にしたい方'
        ],
        exampleLessonsTitle: '具体的内容の例え',
        beginnerTarget: {
            title: '初心者向け',
            description: '※ 慣れてきたら、TOPICを使ってディスカッションを行います',
            activityList: [
                {
                    timeFrame: '①　0〜15分',
                    activity: [
                        '→ 挨拶',
                        '→ 自己紹介',
                        '→ 自分の好きな事',
                        '→ 周りの出来事について'
                    ]
                },
                {
                    timeFrame: '②　15〜25分',
                    activity: 'アウトプットを意識した文法の勉強'
                },
                {
                    timeFrame: '③　25〜30分',
                    activity: '習った大事な内容の復習'
                }
            ]
        },
        middleTarget: {
            title: '中級者向け',
            description: '※ フリートークを使用して「実践形式」で学んでいきます',
            activityList: [
                {
                    timeFrame: '①　0〜10分',
                    activity: [
                        '→ 挨拶',
                        '→ 自己紹介',
                        '→ 自分の好きな事',
                        '→ 周りの出来事について'
                    ]
                },
                {
                    timeFrame: '②　10〜25分',
                    activity: 'こちらで用意したTOPICでディスカッション'
                },
                {
                    timeFrame: '③　25〜30分',
                    activity: '習った大事な内容の復習'
                }
            ]
        },
        costMenu: {
            bannerTitle: '英会話レッスンの料金',
            promotion: {
                title: '★ 入会金：',
                cost: '10,000',
                costNote: '（初月のみ）'
            },
            // セールがなかったらこうのままにセットして： ''
            saleDescription: '', // for demo: 'クリスマスのセール！一月一日までのセール！レッスンをもう受けてる方は参加できない。',
            menuItems: [
                {
                    title: '月4回',
                    price: '10,000円',
                    // specialPriceとpriceは違かったら割引があるように現れる。
                    // セールがなかったらspecialPriceとpriceを等しくしてください
                    specialPrice: '10,000円',
                    /*
                        noteListで何も書いてなかったら何も現れない。

                        免責とかはない場合（例え）：
                        noteList: [
                            ''
                        ]

                        一つのノートの場合：
                        noteList: [
                            'あいうえお'
                        ]

                        一つ以上のノートの場合：
                        noteList: [
                            'あいうえお',
                            'かきくけこ',
                            'さしすせそ'
                        ]
                    */
                    noteList: [
                        '' // For demo: '※ クリスマスのセールのためだけ。レッスンをもう受けてる方は参加できない。'
                    ]
                },
                {
                    title: '月6回',
                    price: '14,000円',
                    specialPrice: '14,000円',
                    noteList: [
                        ''
                    ]
                },
                {
                    title: '月8回',
                    price: '17,000円',
                    specialPrice: '17,000円',
                    noteList: [
                        ''
                    ]
                }
            ],
            emailSubjectLine: '「マンツーマン英会話について」',
            howToApply: (emailSubject) => `Please use the subject ${emailSubject} and include your name and desired course.`,
            // 免責とかはこちら
            disclaimerList: [
                '※ 月額の継続性となっております。退会は翌月以降可能となりますが、再入会する際に入会金10,000円が再度掛かってしまうのでご注意ください。TEST'
            ]
        }
    }
};

export default LANDING_TEXT;
