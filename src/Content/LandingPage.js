/* Removing Lint checkers for comma dangle and white space to make changes easier for non-programmers */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */

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
        exampleLessonsTitle: '【具体的なレッスンの内容】',
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
            headerCost: {
                title: '入会金：',
                // costとspecialCostは等しくなかったら割引があるデザインは現れる
                cost: '10,000',
                specialCost: '10,000',
                costNote: '（初月のみ）',
                specialNote: '期間限定の割引!'
            },
            // セールがなかったらこうのままにセットして： ''
            saleDescription: '',
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
                        ''
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
            emailSubjectLine: '「マンツーマンオンライン英会話の件について」',
            emailContents: 'お名前：',
            howToApply: (emailSubject) => `${emailSubject}お名前を記載の上、送信お願いします。`,
            // 免責とかはこちら
            disclaimerList: [
                '※ 月額の継続性となっております。退会は翌月以降可能となりますが、再入会する際に入会金10,000円が再度掛かってしまうのでご注意ください。'
            ]
        }
    },
    coaching: {
        kumataTalk: {
            doubtsList: [
                '「英会話を始めたいけど、今更遅いよね？」',
                '「オンライン英会話を始めたけど全然話せるようにならない。。。」',
                'そういった方の為に、「話せるようになる」レッスンを提供します！'
            ],
            mySolution: 'そういった方の為に、「話せるようになる」レッスンを提供します！'
        },
        coaching: '英語コーチング',
        descriptionSubHeader: '【英語コーチング】って何？',
        serviceDescription: '英語コーチングとは、生徒さんに専門のコーチがつき、短期間（2〜3ヶ月）で英語を集中的に学べる教育法のことです！',
        coachingLearnedWords: [
            'Ambiguous',
            'Decipher',
            'Chronological',
            'Famine',
            'Abundant',
            'Impair',
            'Negligent',
            'Prestigious',
            'Rigid',
            'Scrutinize',
            'Transition',
            'Widespread'
        ],
        selfDoubtSection: {
            title: '【こう思われている方いませんか？】',
            doubtsList: [
                '英語に興味はあるけど、何から勉強したらいいかわからない',
                '英会話始めたいけど一人で継続できる自信がない'
            ],
            solution: 'クマタコーチングでは、毎日勉強法に就いてのアドバイス、モチベーションを維持できるようにメンタル面でのサポートを提供します！'
        },
        costMenu: {
            bannerTitle: '英語コーチングの料金',
            headerCost: {
                title: '入会金：',
                // costとspecialCostは等しくなかったら割引があるデザインは現れる
                cost: '10,000',
                specialCost: '10,000',
                costNote: '（初月のみ）',
                specialNote: ''
            },
            saleDescription: '無料カウンセリングもしています。',
            menuItems: [
                {
                    title: '教材費',
                    price: '3,840円',
                    // specialPriceとpriceは違かったら割引があるように現れる。
                    // セールがなかったらspecialPriceとpriceを等しくしてください
                    specialPrice: '3,840円',
                    noteList: [
                        ''
                    ]
                },
                {
                    title: '１ヶ月目',
                    price: '40,000円',
                    specialPrice: '40,000円',
                    noteList: [
                        '（２８日間）'
                    ]
                },
                {
                    title: '２ヶ月目',
                    price: '50,000円',
                    specialPrice: '50,000円',
                    noteList: [
                        '（３５日間）'
                    ]
                }
            ],
            emailSubjectLine: '「コーチングの件について」',
            emailContents: 'CHANGE ME', // TODO
            howToApply: (emailSubject) => `${emailSubject}お名前を記載の上、送信お願いします。`,
            // 免責とかはこちら
            disclaimerList: [
                '※ 全期間受講した場合でも、103,840円！！　他社のコーチングと比較した場合でも、かなりリーズナブルな価格で提供しております！'
            ]
        }
    }
};

export default LANDING_TEXT;