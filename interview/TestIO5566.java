import java.io.*;

public class TestIO5566{
    public static void main(String args[])throws FileNotFoundException,IOException{

        //BufferedReader br = new BufferedReader(new FileReader("C:\\Users\\tcfst\\Desktop\\SantanderProductRecommendation\\train_ver2.csv"));
        //BufferedWriter bw = new BufferedWriter(new FileWriter("C:\\Users\\tcfst\\Desktop\\SantanderProductRecommendation\\train_ver22.csv"));
        BufferedReader br = new BufferedReader(new FileReader("C:\\Users\\user\\Documents\\GitHub\\something\\interview\\raw_data.csv"));
        BufferedWriter bw = new BufferedWriter(new FileWriter("C:\\Users\\user\\Documents\\GitHub\\something\\interview\\raw_data2.csv"));

        String ln = null;
        int x = 1;

        while((ln=br.readLine())!=null){
            
            String[] commas = ln.split(",");

            if((commas.length - 1) == 48){
                System.out.println(x);
            ////System.out.println(x+"  Number of commas: " + (commas.length - 1));
            //System.out.println(ln);
            //String ln1 = ln.substring("\"", "\"");  //index
            //System.out.println(ln);
            ////System.out.println("NO1\"="+ln.indexOf("\""));
            //System.out.println(ln.substring(ln.indexOf("\"")+1));
            ////System.out.println("NO2\"="+(ln.substring(ln.indexOf("\"")+1)).indexOf("\""));
            ////System.out.println(ln.indexOf("\"")+(ln.substring(ln.indexOf("\"")+1)).indexOf("\""));
            ////System.out.println(ln.substring(ln.indexOf("\""),(ln.indexOf("\"")+(ln.substring(ln.indexOf("\"")+1)).indexOf("\""))+2));
            ////System.out.println(ln.substring(ln.indexOf("\""),(ln.indexOf("\"")+(ln.substring(ln.indexOf("\"")+1)).indexOf("\""))+2).indexOf(","));
            int x1=ln.indexOf("\"")+ln.substring(ln.indexOf("\""),(ln.indexOf("\"")+(ln.substring(ln.indexOf("\"")+1)).indexOf("\""))+2).indexOf(",");
            //System.out.println(x1);
            ////System.out.println(ln.charAt(x1));
            //String ln1=ln.replace(ln.charAt(x1),"A");
            String ln1=ln.substring(0,x1)+" "+ln.substring(x1+1,ln.length());
            ////System.out.println(ln1.substring(ln1.indexOf("\""),(ln1.indexOf("\"")+(ln1.substring(ln1.indexOf("\"")+1)).indexOf("\""))+2));
            //System.out.println(ln);
            //System.out.println(ln1);
            ln = ln1;
            }
            x = x+1;

            //System.out.println(ln);
            bw.write(ln,0,ln.length());
            bw.newLine();
        }

        br.close();
        bw.close();
    }
}