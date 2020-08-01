#include <cstdio>
#include <windows.h>
#include <ctype.h>
#include <ctime>
int main()
{
    extern MTPA(),MTPB();

    for (int t = 5;t>=0;t--)
    {
        printf("\r本片将于%d秒后自动跳转",t);
        Sleep(1000);
    }
    char options;
    printf("\n\n接来应该要进行什么运动呢?\nA.单人运动 \nB.多人运动 \n");
    scanf(" %c",&options);

    switch (toupper(options))
    {
        case 'A':MTPA(); break;
        case 'B':MTPB(); break;
    }
    return 0;
}

void MTPA()
{
    printf("\n单人运动致炸学校，被影流保安发现，罗志祥被磨，身体损伤，无法运动.");
}

void MTPB()
{
    extern MTPBA(),MTPBB(),MTPBC(bool isSwim);
    char options;
    printf("\n具体是什么运动呢?\nA.羽毛球\nB.篮球\nC.去水边\nD.单人运动\n");
    scanf(" %c",&options);

    switch (toupper(options))
    {
        case 'A':MTPBA();break;
        case 'B':MTPBB();break;
        case 'C':MTPBC(true);break;
        case 'D':MTPA() ;break;
    }

}
void MTPBA()
{
    extern MTPBA1(bool master),MTPBA2();
    srand(time(0));
    int state = rand()%3+1;
    switch(state)
    {
        case 1:case 2:
            printf("\n影流带拍了.\n");
            MTPBA1(true);
        break;
        case 3:
            printf("\n影流忘带拍了，使出影流之技，把自己的替身当拍使.\n");
            MTPBA2();
        break;
    }
}
void MTPBA1(bool master)
{
    srand(time(0));
    printf("\n");
    if(master)
    {
        printf("志祥发球.\n");
        scanf("");
    }
    else
    {
        printf("影流发球.\n");
        scanf("");
    }
    bool win = rand()%2;
    if(win)
    {
        printf("志祥胜.\n");
    }
    else
    {
        printf("影流胜.\n");
    }
    printf("再来一次?\nA.是\nB.否\n");
    char again;
    scanf(" %c",&again);
    switch (toupper(again))
    {
    case 'A':
        if(win)MTPBA1(false);else MTPBA1(true);
        break;
    
    case 'B':
        extern MTPBALeave();MTPBALeave();
        break;
    }
}
void MTPBA2()
{
    printf("你应如何应对?\nA.离开\nB.照打\nC.使出绝招\n");
    char options;
    scanf(" %c",&options);
    switch(toupper(options))
    {
        case 'A':extern MTPBALeave();MTPBALeave();break;
        case 'B':printf("志祥被打残，身体损伤，无法运动.\n");break;
        case 'C':printf("球被打破，只能进行下一运动.\n");extern MTPBALeave();MTPBALeave();break;
    }
    
}
void MTPBALeave()
{
    extern MTPBB(),MTPBC(bool isSwim);
    char options;
    printf("\n请选择你的运动:\nA.篮球\nB.去水边\nC.单人运动\n");
    scanf(" %c",&options);
    switch (toupper(options))
    {
    case 'A':
        MTPBB();
        break;
    case 'B':
        MTPBC(true);
        break;
    case 'C':
        MTPA();
        break;
    }
}
void MTPBB()
{
    extern MTPBC(bool isSwim);
    printf("\n请选择你的活动\nA.打球\nB.调戏\n");
    char options;
    scanf(" %c",&options);
    switch(toupper(options))
    {
        case 'A':printf("鸡你太美\n");
            printf("\n再来?\nA.是\nB.否\n");
            scanf(" %c",&options);
            switch (toupper(options))
            {
            case 'A':
                MTPBB();
                break;
            
            case 'B':
                printf("\n请选择你的运动:\nA.去水边\nB.单人运动\n");
                scanf(" %c",&options);
                switch (toupper(options))
                {
                    case 'A':
                        MTPBC(true);
                        break;
                    case 'B':
                        MTPA();
                        break;
                }
                break;
            }
            break;
        case 'B':printf("被打残，无法运动.\n");break;
    }
}
void MTPBC(bool isSwim)
{
    extern MTPBCA(),MTPBCB(),MTPBCC(),MTPEnd(),MTPE();
    char options;
    if(isSwim)
    {
        printf("\n请选择你的运动项目:\nA.凫水\nB.钓鱼\nC.划船\nD.退出\n");
        scanf(" %c",&options);
        switch (toupper(options))
        {
            case 'A':
                MTPBCA();
                break;
            case 'B':
                MTPBCB();
                break;
            case 'C':
                MTPBCC();
                break;
            case 'D':
                MTPE();
                break;
        }
    }
    else
    {
        printf("\n请选择你的运动项目:\nA.钓鱼\nB.划船\nC.退出\n");
        scanf(" %c",&options);
        switch (toupper(options))
        {
            case 'A':
                MTPBCB();
                break;
            case 'B':
                MTPBCC();
                break;
            case 'C':
                MTPE();
                break;
        }
    }
}
void MTPBCA()
{
    extern MTPBC(bool isSwim);
    printf("鲲鲲提醒，确定吗?\nA.去\nB.不去\n");
    char options;
    scanf(" %c",&options);
    switch (toupper(options))
    {
        case 'A':
            printf("志祥游水遇险.不要肆意在野外水域游水.\n");
            break;
        case 'B':
            MTPBC(false);
            break;
    }
}
void MTPBCB()
{
    srand(time(0));
    const char* item[] = {"鱼","无","水草","短裤"};
    printf("%s\n\n再来一次?\nA.是\nB.否\n",item[rand()%4]);
    char again;
    scanf(" %c",&again);
    switch (toupper(again))
    {
        case 'A':MTPBCB();break;
        case 'B':MTPBC(true);break;
    }
}
void MTPBCC()
{
    printf("划完了.\n");
    MTPBC(true);

}
void MTPE()
{
	extern MTPEnd();
	printf("\n请选择你的项目\nA.单人运动\nB.回家\n");
	char options;
	scanf(" %c",&options);
	switch (toupper(options))
	{
		case 'A':MTPA();break;
		case 'B':MTPEnd();break;
	}
}
void MTPEnd()
{
    printf("\n罗志祥累了，肝不动了，回家写作业(真结局)\n");
}