
import './App.css';
//import Nav from './components/Nav';
import React from 'react';
import Store from './components/Store';
import { Grid, GridItem, Input } from '@chakra-ui/react'
import Search from './components/Search';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
    
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <Store
           name="معسكر علم البيانات وتعلم الآلة"
           disc="للتعرف على مفاهيم علم البيانات وكيفية تحليلها ونمذجتها واختيار الخوارزميات المناسبة وعرضها على شكل رسوم بيانية واضحة ومختصرة"
           expiry="14"
            
          />

          <Store
          name="برامج طويق للناشئين"
          disc="مجموعة من الدورات التدريبية في البرمجة والتصميم والتقنيات الحديثة والتي تهدف إلى مساعدة المتدربين الناشئين على اكتشاف اهتماماتهم التقنية"
          expiry="10"
            
          />

          <Store
            name="دورة Git and Github"
            disc="Git & GitHub تقدم #أكاديمية_طويق دورة من البداية حتى الاتقان"
            expiry="25"
          />

          <Store
            name="DS and Machine Learning"
            disc="للتعرف على علم البيانات وكيفية تحليلها ومعالجتها وعرضها ونمذجتها! Data Science and Machine Learning"
            expiry="15"
          />

          <Store
            name="UI/UX"
            disc="UI/UX تُقدم #أكاديمية_طويق دورة Figma من البداية حتى الاتقان
              باستخدام"
              expiry="17" 
          />

          <Store
           name="No-Code"
           disc="تصميم مواقع الويب من الصفر نقدم لكم دورة تصميم المواقع بمنهجية No-Code"
           expiry="20"
          />
          <Store
           name="معسكر علم البيانات وتعلم الآلة"
           disc="للتعرف على مفاهيم علم البيانات وكيفية تحليلها ونمذجتها واختيار الخوارزميات المناسبة وعرضها على شكل رسوم بيانية واضحة ومختصرة"
           expiry="14"
            
          />

          <Store
          name="برامج طويق للناشئين"
          disc="مجموعة من الدورات التدريبية في البرمجة والتصميم والتقنيات الحديثة والتي تهدف إلى مساعدة المتدربين الناشئين على اكتشاف اهتماماتهم التقنية"
          expiry="10"
            
          />

          <Store
            name="دورة Git and Github"
            disc="Git & GitHub تقدم #أكاديمية_طويق دورة من البداية حتى الاتقان"
            expiry="25"
          />

          <Store
            name="DS and Machine Learning"
            disc="للتعرف على علم البيانات وكيفية تحليلها ومعالجتها وعرضها ونمذجتها! Data Science and Machine Learning"
            expiry="15"
          />

          <Store
            name="UI/UX"
            disc="UI/UX تُقدم #أكاديمية_طويق دورة Figma من البداية حتى الاتقان
              باستخدام"
              expiry="17" 
          />

          <Store
           name="No-Code"
           disc="تصميم مواقع الويب من الصفر نقدم لكم دورة تصميم المواقع بمنهجية No-Code"
           expiry="20"
          />
        </Grid>
     
    </div>
  );
}

export default App;
