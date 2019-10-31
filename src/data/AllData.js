const data = [
    {
        name: 'ITEE',
        children: [
            {
                name: 'Master of Information Technology',
                noOfStudents: 100,
                averageDiscussionEngagement: 65,
                averageListeningEngagement: 73,
                isSmartScreen: true,
                isWhiteBoard: true,
                isHearingAssistance: true,
                children: [
                    {
                        name: 'Introduction to Software Engineering',
                        averageDiscussionEngagement: 81,
                        averageListeningEngagement: 93,
                        noOfStudents: 90,
                        isSmartScreen: true,
                        isWhiteBoard: false,
                        isHearingAssistance: true,
                        children: [
                            {
                                name: 'CSSE7030 2019-9-5',
                                children: [
                                    {
                                        name: 'STUDENTS',
                                        children: [
                                            { name: 'Listening', value: 10 },
                                            {
                                                name: 'Individual thinking',
                                                value: 20,
                                            },
                                            {
                                                name:
                                                    'Clicker question discussion',
                                                value: 10,
                                            },
                                            {
                                                name: 'Worksheet group work',
                                                value: 5,
                                            },
                                            {
                                                name:
                                                    'Answer instructor question',
                                                value: 2,
                                            },
                                            {
                                                name: 'Student asks a question',
                                                value: 5,
                                            },
                                        ],
                                    },
                                    {
                                        name: 'STAFFS',
                                        children: [
                                            { name: 'Lecturing', value: 30 },
                                            {
                                                name: 'Real time writing',
                                                value: 10,
                                            },
                                            { name: 'Follow up', value: 2 },
                                            {
                                                name: 'Post questions',
                                                value: 5,
                                            },
                                            {
                                                name: 'Clicker questions',
                                                value: 2,
                                            },
                                            {
                                                name: 'Answer questions',
                                                value: 5,
                                            },
                                            {
                                                name:
                                                    'Moving through the classroom',
                                                value: 1,
                                            },
                                            {
                                                name:
                                                    '1 on 1 discussions with students',
                                                value: 5,
                                            },
                                        ],
                                    },
                                ],
                            },

                            {
                                name: 'CSSE7030 2019-9-6',
                                children: [
                                    {
                                        name: 'STUDENTS',
                                        children: [
                                            { name: 'Listening', value: 10 },
                                            {
                                                name: 'Individual thinking',
                                                value: 20,
                                            },
                                            {
                                                name:
                                                    'Clicker question discussion',
                                                value: 10,
                                            },
                                            {
                                                name: 'Worksheet group work',
                                                value: 5,
                                            },
                                            {
                                                name:
                                                    'Answer instructor question',
                                                value: 2,
                                            },
                                            {
                                                name: 'Student asks a question',
                                                value: 5,
                                            },
                                        ],
                                    },
                                    {
                                        name: 'STAFFS',
                                        children: [
                                            { name: 'Lecturing', value: 30 },
                                            {
                                                name: 'Real time writing',
                                                value: 10,
                                            },
                                            { name: 'Follow up', value: 2 },
                                            {
                                                name: 'Post questions',
                                                value: 5,
                                            },
                                            {
                                                name: 'Clicker questions',
                                                value: 2,
                                            },
                                            {
                                                name: 'Answer questions',
                                                value: 5,
                                            },
                                            {
                                                name:
                                                    'Moving through the classroom',
                                                value: 1,
                                            },
                                            {
                                                name:
                                                    '1 on 1 discussions with students',
                                                value: 5,
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: 'Advanced Software Engineering',
                        averageDiscussionEngagement: 67,
                        averageListeningEngagement: 97,
                        noOfStudents: 110,
                        isSmartScreen: true,
                        isWhiteBoard: false,
                        isHearingAssistance: true,
                        children: [
                            {
                                name: 'CSSE7023 2019-9-5',
                                children: [
                                    {
                                        name: 'STUDENTS',
                                        children: [
                                            { name: 'Listening', value: 10 },
                                            {
                                                name: 'Individual thinking',
                                                value: 20,
                                            },
                                            {
                                                name:
                                                    'Clicker question discussion',
                                                value: 10,
                                            },
                                            {
                                                name: 'Worksheet group work',
                                                value: 5,
                                            },
                                            {
                                                name:
                                                    'Answer instructor question',
                                                value: 2,
                                            },
                                            {
                                                name: 'Student asks a question',
                                                value: 5,
                                            },
                                        ],
                                    },
                                    {
                                        name: 'STAFFS',
                                        children: [
                                            { name: 'Lecturing', value: 30 },
                                            {
                                                name: 'Real time writing',
                                                value: 10,
                                            },
                                            { name: 'Follow up', value: 2 },
                                            {
                                                name: 'Post questions',
                                                value: 5,
                                            },
                                            {
                                                name: 'Clicker questions',
                                                value: 2,
                                            },
                                            {
                                                name: 'Answer questions',
                                                value: 5,
                                            },
                                            {
                                                name:
                                                    'Moving through the classroom',
                                                value: 1,
                                            },
                                            {
                                                name:
                                                    '1 on 1 discussions with students',
                                                value: 5,
                                            },
                                        ],
                                    },
                                ],
                            },

                            {
                                name: 'CSSE7023 2019-9-6',
                                children: [
                                    {
                                        name: 'STUDENTS',
                                        children: [
                                            { name: 'Listening', value: 10 },
                                            {
                                                name: 'Individual thinking',
                                                value: 20,
                                            },
                                            {
                                                name:
                                                    'Clicker question discussion',
                                                value: 10,
                                            },
                                            {
                                                name: 'Worksheet group work',
                                                value: 5,
                                            },
                                            {
                                                name:
                                                    'Answer instructor question',
                                                value: 2,
                                            },
                                            {
                                                name: 'Student asks a question',
                                                value: 5,
                                            },
                                        ],
                                    },
                                    {
                                        name: 'STAFFS',
                                        children: [
                                            { name: 'Lecturing', value: 30 },
                                            {
                                                name: 'Real time writing',
                                                value: 10,
                                            },
                                            { name: 'Follow up', value: 2 },
                                            {
                                                name: 'Post questions',
                                                value: 5,
                                            },
                                            {
                                                name: 'Clicker questions',
                                                value: 2,
                                            },
                                            {
                                                name: 'Answer questions',
                                                value: 5,
                                            },
                                            {
                                                name:
                                                    'Moving through the classroom',
                                                value: 1,
                                            },
                                            {
                                                name:
                                                    '1 on 1 discussions with students',
                                                value: 5,
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Master of Computer Science',
                noOfStudents: 70,
                averageDiscussionEngagement: 59,
                averageListeningEngagement: 87,
                isSmartScreen: true,
                isWhiteBoard: true,
                isHearingAssistance: true,
                children: [
                    {
                        name: 'Data Mining',
                        averageDiscussionEngagement: 34,
                        averageListeningEngagement: 73,
                        noOfStudents: 80,
                        isSmartScreen: true,
                        isWhiteBoard: true,
                        isHearingAssistance: false,
                        children: [
                            {
                                name: 'INFS7203 2019-9-5',
                                children: [
                                    {
                                        name: 'STUDENTS',
                                        children: [
                                            { name: 'Listening', value: 10 },
                                            {
                                                name: 'Individual thinking',
                                                value: 20,
                                            },
                                            {
                                                name:
                                                    'Clicker question discussion',
                                                value: 10,
                                            },
                                            {
                                                name: 'Worksheet group work',
                                                value: 5,
                                            },
                                            {
                                                name:
                                                    'Answer instructor question',
                                                value: 2,
                                            },
                                            {
                                                name: 'Student asks a question',
                                                value: 5,
                                            },
                                        ],
                                    },
                                    {
                                        name: 'STAFFS',
                                        children: [
                                            { name: 'Lecturing', value: 30 },
                                            {
                                                name: 'Real time writing',
                                                value: 10,
                                            },
                                            { name: 'Follow up', value: 2 },
                                            {
                                                name: 'Post questions',
                                                value: 5,
                                            },
                                            {
                                                name: 'Clicker questions',
                                                value: 2,
                                            },
                                            {
                                                name: 'Answer questions',
                                                value: 5,
                                            },
                                            {
                                                name:
                                                    'Moving through the classroom',
                                                value: 1,
                                            },
                                            {
                                                name:
                                                    '1 on 1 discussions with students',
                                                value: 5,
                                            },
                                        ],
                                    },
                                ],
                            },

                            {
                                name: 'INFS7203 2019-9-6',
                                children: [
                                    {
                                        name: 'STUDENTS',
                                        children: [
                                            { name: 'Listening', value: 10 },
                                            {
                                                name: 'Individual thinking',
                                                value: 20,
                                            },
                                            {
                                                name:
                                                    'Clicker question discussion',
                                                value: 10,
                                            },
                                            {
                                                name: 'Worksheet group work',
                                                value: 5,
                                            },
                                            {
                                                name:
                                                    'Answer instructor question',
                                                value: 2,
                                            },
                                            {
                                                name: 'Student asks a question',
                                                value: 5,
                                            },
                                        ],
                                    },
                                    {
                                        name: 'STAFFS',
                                        children: [
                                            { name: 'Lecturing', value: 30 },
                                            {
                                                name: 'Real time writing',
                                                value: 10,
                                            },
                                            { name: 'Follow up', value: 2 },
                                            {
                                                name: 'Post questions',
                                                value: 5,
                                            },
                                            {
                                                name: 'Clicker questions',
                                                value: 2,
                                            },
                                            {
                                                name: 'Answer questions',
                                                value: 5,
                                            },
                                            {
                                                name:
                                                    'Moving through the classroom',
                                                value: 1,
                                            },
                                            {
                                                name:
                                                    '1 on 1 discussions with students',
                                                value: 5,
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: 'Machine Learning',
                        averageDiscussionEngagement: 16,
                        averageListeningEngagement: 63,
                        noOfStudents: 60,
                        isSmartScreen: true,
                        isWhiteBoard: false,
                        isHearingAssistance: true,
                        children: [
                            {
                                name: 'COMP7703 2019-9-5',
                                children: [
                                    {
                                        name: 'STUDENTS',
                                        children: [
                                            { name: 'Listening', value: 10 },
                                            {
                                                name: 'Individual thinking',
                                                value: 20,
                                            },
                                            {
                                                name:
                                                    'Clicker question discussion',
                                                value: 10,
                                            },
                                            {
                                                name: 'Worksheet group work',
                                                value: 5,
                                            },
                                            {
                                                name:
                                                    'Answer instructor question',
                                                value: 2,
                                            },
                                            {
                                                name: 'Student asks a question',
                                                value: 5,
                                            },
                                        ],
                                    },
                                    {
                                        name: 'STAFFS',
                                        children: [
                                            { name: 'Lecturing', value: 30 },
                                            {
                                                name: 'Real time writing',
                                                value: 10,
                                            },
                                            { name: 'Follow up', value: 2 },
                                            {
                                                name: 'Post questions',
                                                value: 5,
                                            },
                                            {
                                                name: 'Clicker questions',
                                                value: 2,
                                            },
                                            {
                                                name: 'Answer questions',
                                                value: 5,
                                            },
                                            {
                                                name:
                                                    'Moving through the classroom',
                                                value: 1,
                                            },
                                            {
                                                name:
                                                    '1 on 1 discussions with students',
                                                value: 5,
                                            },
                                        ],
                                    },
                                ],
                            },

                            {
                                name: 'COMP7703 2019-9-6',
                                children: [
                                    {
                                        name: 'STUDENTS',
                                        children: [
                                            { name: 'Listening', value: 10 },
                                            {
                                                name: 'Individual thinking',
                                                value: 20,
                                            },
                                            {
                                                name:
                                                    'Clicker question discussion',
                                                value: 10,
                                            },
                                            {
                                                name: 'Worksheet group work',
                                                value: 5,
                                            },
                                            {
                                                name:
                                                    'Answer instructor question',
                                                value: 2,
                                            },
                                            {
                                                name: 'Student asks a question',
                                                value: 5,
                                            },
                                        ],
                                    },
                                    {
                                        name: 'STAFFS',
                                        children: [
                                            { name: 'Lecturing', value: 30 },
                                            {
                                                name: 'Real time writing',
                                                value: 10,
                                            },
                                            { name: 'Follow up', value: 2 },
                                            {
                                                name: 'Post questions',
                                                value: 5,
                                            },
                                            {
                                                name: 'Clicker questions',
                                                value: 2,
                                            },
                                            {
                                                name: 'Answer questions',
                                                value: 5,
                                            },
                                            {
                                                name:
                                                    'Moving through the classroom',
                                                value: 1,
                                            },
                                            {
                                                name:
                                                    '1 on 1 discussions with students',
                                                value: 5,
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Master of Data Science',
                noOfStudents: 90,
                averageDiscussionEngagement: 79,
                averageListeningEngagement: 82,
                isSmartScreen: true,
                isWhiteBoard: true,
                isHearingAssistance: true,
                children: [
                    {
                        name: 'Relational Database Systems',
                        averageDiscussionEngagement: 56,
                        averageListeningEngagement: 77,
                        noOfStudents: 80,
                        isSmartScreen: false,
                        isWhiteBoard: false,
                        isHearingAssistance: true,
                        children: [
                            {
                                name: 'INFS7903 2019-9-15',
                                children: [
                                    {
                                        name: 'STUDENTS',
                                        children: [
                                            { name: 'Listening', value: 10 },
                                            {
                                                name: 'Individual thinking',
                                                value: 20,
                                            },
                                            {
                                                name:
                                                    'Clicker question discussion',
                                                value: 10,
                                            },
                                            {
                                                name: 'Worksheet group work',
                                                value: 15,
                                            },
                                            {
                                                name:
                                                    'Answer instructor question',
                                                value: 12,
                                            },
                                            {
                                                name: 'Student asks a question',
                                                value: 15,
                                            },
                                        ],
                                    },
                                    {
                                        name: 'STAFFS',
                                        children: [
                                            { name: 'Lecturing', value: 30 },
                                            {
                                                name: 'Real time writing',
                                                value: 10,
                                            },
                                            { name: 'Follow up', value: 2 },
                                            {
                                                name: 'Post questions',
                                                value: 5,
                                            },
                                            {
                                                name: 'Clicker questions',
                                                value: 2,
                                            },
                                            {
                                                name: 'Answer questions',
                                                value: 5,
                                            },
                                            {
                                                name:
                                                    'Moving through the classroom',
                                                value: 1,
                                            },
                                            {
                                                name:
                                                    '1 on 1 discussions with students',
                                                value: 5,
                                            },
                                        ],
                                    },
                                ],
                            },

                            {
                                name: 'INFS7903 2019-9-16',
                                children: [
                                    {
                                        name: 'STUDENTS',
                                        children: [
                                            { name: 'Listening', value: 10 },
                                            {
                                                name: 'Individual thinking',
                                                value: 20,
                                            },
                                            {
                                                name:
                                                    'Clicker question discussion',
                                                value: 10,
                                            },
                                            {
                                                name: 'Worksheet group work',
                                                value: 5,
                                            },
                                            {
                                                name:
                                                    'Answer instructor question',
                                                value: 2,
                                            },
                                            {
                                                name: 'Student asks a question',
                                                value: 5,
                                            },
                                        ],
                                    },
                                    {
                                        name: 'STAFFS',
                                        children: [
                                            { name: 'Lecturing', value: 30 },
                                            {
                                                name: 'Real time writing',
                                                value: 10,
                                            },
                                            { name: 'Follow up', value: 2 },
                                            {
                                                name: 'Post questions',
                                                value: 5,
                                            },
                                            {
                                                name: 'Clicker questions',
                                                value: 2,
                                            },
                                            {
                                                name: 'Answer questions',
                                                value: 5,
                                            },
                                            {
                                                name:
                                                    'Moving through the classroom',
                                                value: 1,
                                            },
                                            {
                                                name:
                                                    '1 on 1 discussions with students',
                                                value: 5,
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: 'Artificial Intelligence',
                        averageDiscussionEngagement: 71,
                        averageListeningEngagement: 85,
                        isSmartScreen: true,
                        noOfStudents: 100,
                        isWhiteBoard: true,
                        isHearingAssistance: false,
                        children: [
                            {
                                name: 'COMP7702 2019-9-25',
                                children: [
                                    {
                                        name: 'STUDENTS',
                                        children: [
                                            { name: 'Listening', value: 10 },
                                            {
                                                name: 'Individual thinking',
                                                value: 20,
                                            },
                                            {
                                                name:
                                                    'Clicker question discussion',
                                                value: 10,
                                            },
                                            {
                                                name: 'Worksheet group work',
                                                value: 5,
                                            },
                                            {
                                                name:
                                                    'Answer instructor question',
                                                value: 2,
                                            },
                                            {
                                                name: 'Student asks a question',
                                                value: 5,
                                            },
                                        ],
                                    },
                                    {
                                        name: 'STAFFS',
                                        children: [
                                            { name: 'Lecturing', value: 30 },
                                            {
                                                name: 'Real time writing',
                                                value: 10,
                                            },
                                            { name: 'Follow up', value: 2 },
                                            {
                                                name: 'Post questions',
                                                value: 5,
                                            },
                                            {
                                                name: 'Clicker questions',
                                                value: 2,
                                            },
                                            {
                                                name: 'Answer questions',
                                                value: 5,
                                            },
                                            {
                                                name:
                                                    'Moving through the classroom',
                                                value: 1,
                                            },
                                            {
                                                name:
                                                    '1 on 1 discussions with students',
                                                value: 5,
                                            },
                                        ],
                                    },
                                ],
                            },

                            {
                                name: 'COMP7702 2019-9-16',
                                children: [
                                    {
                                        name: 'STUDENTS',
                                        children: [
                                            { name: 'Listening', value: 10 },
                                            {
                                                name: 'Individual thinking',
                                                value: 20,
                                            },
                                            {
                                                name:
                                                    'Clicker question discussion',
                                                value: 10,
                                            },
                                            {
                                                name: 'Worksheet group work',
                                                value: 5,
                                            },
                                            {
                                                name:
                                                    'Answer instructor question',
                                                value: 2,
                                            },
                                            {
                                                name: 'Student asks a question',
                                                value: 5,
                                            },
                                        ],
                                    },
                                    {
                                        name: 'STAFFS',
                                        children: [
                                            { name: 'Lecturing', value: 30 },
                                            {
                                                name: 'Real time writing',
                                                value: 10,
                                            },
                                            { name: 'Follow up', value: 2 },
                                            {
                                                name: 'Post questions',
                                                value: 5,
                                            },
                                            {
                                                name: 'Clicker questions',
                                                value: 2,
                                            },
                                            {
                                                name: 'Answer questions',
                                                value: 5,
                                            },
                                            {
                                                name:
                                                    'Moving through the classroom',
                                                value: 1,
                                            },
                                            {
                                                name:
                                                    '1 on 1 discussions with students',
                                                value: 5,
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

export default data;
